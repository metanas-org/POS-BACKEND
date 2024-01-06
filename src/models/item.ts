import { Model } from "objection";

class Item extends Model {
  static get tableName() {
    return "items";
  }

  id!: string;
  name!: string;
  description?: string;
  hsn_code?: string;
  item_category_id?: string;
  item_brand_id?: string;
  item_type_id?: number;
  item_preparation_time?: number;
  mark_as_favourite!: boolean;
  is_item_an_addon!: boolean;
  can_addon_be_in_catalog!: boolean;
  display_variants_in_catalog!: boolean;
  is_purchaseable!: boolean;
  is_sellable!: boolean;
  is_returnable!: boolean;
  return_window_in_days?: number;
  is_only_exchangeable!: boolean;
  is_stock_trackable!: boolean;
  trace_stock_uom_id?: string;
  is_stock_trace_by_batch!: boolean;
  is_stock_trace_by_serial!: boolean;
  organization_id?: string;
  client_id?: string;
  is_active!: boolean;
  created_at!: string;
  updated_at!: string;
  is_deleted!: boolean;
  created_by?: string;
  updated_by?: string;

  static get jsonSchema() {
    return {
      type: "object",
      properties: {
        id: { type: "string", format: "uuid" },
        name: { type: "string" },
        description: { type: "string" },
        hsn_code: { type: "string" },
        item_category_id: { type: "string", format: "uuid" },
        item_brand_id: { type: "string", format: "uuid" },
        item_type_id: { type: "integer" },
        item_preparation_time: { type: "number" },
        mark_as_favourite: { type: "boolean" },
        is_item_an_addon: { type: "boolean" },
        can_addon_be_in_catalog: { type: "boolean" },
        display_variants_in_catalog: { type: "boolean" },
        is_purchaseable: { type: "boolean" },
        is_sellable: { type: "boolean" },
        is_returnable: { type: "boolean" },
        return_window_in_days: { type: "integer" },
        is_only_exchangeable: { type: "boolean" },
        is_stock_trackable: { type: "boolean" },
        trace_stock_uom_id: { type: "string", format: "uuid" },
        is_stock_trace_by_batch: { type: "boolean" },
        is_stock_trace_by_serial: { type: "boolean" },
        organization_id: { type: "string", format: "uuid" },
        client_id: { type: "string", format: "uuid" },
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
    category: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/category",
      join: {
        from: "items.item_category_id",
        to: "categories.id",
      },
    },
    brand: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/brand",
      join: {
        from: "items.item_brand_id",
        to: "brands.id",
      },
    },
    itemType: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/itemType",
      join: {
        from: "items.item_type_id",
        to: "master_item_types.id",
      },
    },
    stockUom: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/uom",
      join: {
        from: "items.trace_stock_uom_id",
        to: "uoms.id",
      },
    },
    organization: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/organization",
      join: {
        from: "items.organization_id",
        to: "organizations.id",
      },
    },
    client: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/client",
      join: {
        from: "items.client_id",
        to: "clients.id",
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

export default Item;
