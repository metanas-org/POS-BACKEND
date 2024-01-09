import { Model } from "objection";

class StockAdjustedItem extends Model {
  static get tableName() {
    return "stock_adjusted_items";
  }

  id!: string;
  type!: string;
  item_id!: string;
  item_variant_id!: string;
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
        type: { type: "string", enum: ["Increase", "Decrease"] },
        item_id: { type: "string", format: "uuid" },
        item_variant_id: { type: "string", format: "uuid" },
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
    item: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/item",
      join: {
        from: "stock_adjusted_items.item_id",
        to: "items.id",
      },
    },
    itemVariant: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/itemVariant",
      join: {
        from: "stock_adjusted_items.item_variant_id",
        to: "item_variants.id",
      },
    },
    uom: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/uom",
      join: {
        from: "stock_adjusted_items.uom_id",
        to: "uoms.id",
      },
    },
    organization: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/organization",
      join: {
        from: "stock_adjusted_items.organization_id",
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

export default StockAdjustedItem;
