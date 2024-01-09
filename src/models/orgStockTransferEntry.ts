import { Model } from "objection";

class OrgStockTransferEntry extends Model {
  static get tableName() {
    return "org_stock_transfer_entries";
  }

  id!: string;
  transfer_id!: string;
  transferred_item_id!: string;
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
        transfer_id: { type: "string", format: "uuid" },
        transferred_item_id: { type: "string", format: "uuid" },
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
    stockTransfer: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/orgStockTransfer",
      join: {
        from: "org_stock_transfer_entries.transfer_id",
        to: "org_stock_transfers.id",
      },
    },
    transferredItem: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/stockAdjustedItem",
      join: {
        from: "org_stock_transfer_entries.transferred_item_id",
        to: "stock_adjusted_items.id",
      },
    },
    organization: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/organization",
      join: {
        from: "org_stock_transfer_entries.organization_id",
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

export default OrgStockTransferEntry;
