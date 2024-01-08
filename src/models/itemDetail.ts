import { Model } from "objection";

class ItemDetail extends Model {
  static get tableName() {
    return "item_details";
  }

  id!: string;
  item_code!: string;
  item_id!: string;
  variant_name?: string;
  sku_code?: string;
  barcode?: string;
  base_uom_category_id?: string;
  base_quantity?: number;
  base_quantity_uom?: string;
  cost_price?: number;
  selling_price?: number;
  selling_uom_id?: string;
  vat_tax?: string;
  is_composite!: boolean;
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
        item_code: { type: "text" },
        item_id: { type: "string", format: "uuid" },
        variant_name: { type: "text" },
        sku_code: { type: "text" },
        barcode: { type: "text" },
        base_uom_category_id: { type: "string", format: "uuid" },
        base_quantity: { type: "number" },
        base_quantity_uom: { type: "string", format: "uuid" },
        cost_price: { type: "number" },
        selling_price: { type: "number" },
        selling_uom_id: { type: "string", format: "uuid" },
        vat_tax: { type: "text" },
        is_composite: { type: "boolean" },
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
        from: "item_details.item_id",
        to: "items.id",
      },
    },
    baseUomCategory: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/uomCategory",
      join: {
        from: "item_details.base_uom_category_id",
        to: "uom_categories.id",
      },
    },
    baseQuantityUom: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/uom",
      join: {
        from: "item_details.base_quantity_uom",
        to: "uoms.id",
      },
    },
    sellingUom: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/uom",
      join: {
        from: "item_details.selling_uom_id",
        to: "uoms.id",
      },
    },
    organization: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/organization",
      join: {
        from: "item_purchaseable_uoms.organization_id",
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

export default ItemDetail;
