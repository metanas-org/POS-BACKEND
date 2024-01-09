import { Model } from "objection";

class StockAdjustedItemDetail extends Model {
  static get tableName() {
    return "stock_adjusted_items_details";
  }

  id!: string;
  adjustment_items_id!: string;
  batch_no!: string;
  serial_no!: string;
  quantity!: number;
  expiry_date!: string;
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
        adjustment_items_id: { type: "string", format: "uuid" },
        batch_no: { type: "string" },
        serial_no: { type: "string" },
        quantity: { type: "number" },
        expiry_date: { type: "string", format: "date" },
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
    adjustedItem: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/stockAdjustedItem",
      join: {
        from: "stock_adjusted_items_details.adjustment_items_id",
        to: "stock_adjusted_items.id",
      },
    },
    organization: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/organization",
      join: {
        from: "stock_adjusted_items_details.organization_id",
        to: "organizations.id",
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

export default StockAdjustedItemDetail;
