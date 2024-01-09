import { Model } from "objection";

class OrgStockHistory extends Model {
  static get tableName() {
    return "org_stock_histories";
  }

  id!: string;
  type!: string;
  related_id!: string;
  quantity!: number;
  uom_id!: string;
  organization_id!: string;
  client_id!: string;
  is_active!: boolean;
  created_at!: string;
  updated_at!: string;
  is_deleted!: boolean;
  created_by!: string;
  updated_by!: string;

  static get jsonSchema() {
    return {
      type: "object",
      properties: {
        id: { type: "string", format: "uuid" },
        type: {
          type: "string",
          enum: ["in", "out", "adjusted_in", "adjusted_out", "transfer"],
          /* in -Stock received,out -Stock issued , 
          adjusted_in-Stock adjustment - increase,
          adjusted_out-Stock adjustment - decrease,transfer-Stock 
          transfer between locations */
        },

        related_id: { type: "string", format: "uuid" },
        quantity: { type: "number" },
        uom_id: { type: "string", format: "uuid" },
        organization_id: { type: "string", format: "uuid" },
        client_id: { type: "string" },
        is_active: { type: "boolean" },
        created_at: { type: "string", format: "date-time" },
        updated_at: { type: "string", format: "date-time" },
        is_deleted: { type: "boolean" },
        created_by: { type: "string", format: "uuid" },
        updated_by: { type: "string", format: "uuid" },
      },
    };
  }

  static relationMappings = {
    uom: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/uom",
      join: {
        from: "org_stock_histories.uom_id",
        to: "uoms.id",
      },
    },
    organization: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/organization",
      join: {
        from: "org_stock_histories.organization_id",
        to: "organizations.id",
      },
    },

    //Reference to the order in the org_orders table
    orgOrder: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/orgOrder",
      join: {
        from: "org_stock_histories.related_id",
        to: "org_orders.id",
      },
    },
    //Adjustment types - Reference to the stock adjustment in the org_stock_adjustments table
    orgStockAdjustment: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/orgStockAdjustment",
      join: {
        from: "org_stock_histories.related_id",
        to: "org_stock_adjustments.id",
      },
    },

    //Transfer type and also type if purchase its 'IN' if sales its 'OUT' - Reference to the stock transfer in the org_stock_transfers table
    orgStockTransfer: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/orgStockTransfer",
      join: {
        from: "org_stock_histories.related_id",
        to: "org_stock_transfers.id",
      },
    },
  };

  $beforeInsert() {
    this.created_at = new Date().toISOString();
    this.updated_at = this.created_at;
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
}

export default OrgStockHistory;
