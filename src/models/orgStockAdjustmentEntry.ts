import { Model } from "objection";

class OrgStockAdjustmentEntry extends Model {
  static get tableName() {
    return "org_stock_adjustment_entries";
  }

  id!: string;
  adjustment_id!: string;
  adjustment_items_id!: string;
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
        adjustment_id: { type: "string", format: "uuid" },
        adjustment_items_id: { type: "string", format: "uuid" },
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
    adjustment: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/orgStockAdjustment",
      join: {
        from: "org_stock_adjustment_entries.adjustment_id",
        to: "org_stock_adjustments.id",
      },
    },
    adjustmentItem: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/stockAdjustedItem",
      join: {
        from: "org_stock_adjustment_entries.adjustment_items_id",
        to: "stock_adjusted_items.id",
      },
    },
    organization: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/organization",
      join: {
        from: "org_stock_adjustment_entries.organization_id",
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

export default OrgStockAdjustmentEntry;
