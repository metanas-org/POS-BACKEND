import { Model } from "objection";

class LocationStockAlert extends Model {
  static get tableName() {
    return "location_stock_alert";
  }

  id!: string;
  location_id!: string;
  item_id!: string;
  minimum_stock!: number;
  uom_id!: string;
  is_approved!: boolean;
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
        location_id: { type: "string", format: "uuid" },
        item_id: { type: "string", format: "uuid" },
        minimum_stock: { type: "number" },
        uom_id: { type: "string", format: "uuid" },
        is_approved: { type: "boolean" },
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

  static get relationMappings() {
    return {
      location: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + "/location",
        join: {
          from: "location_stock_alert.location_id",
          to: "locations.id",
        },
      },
      item: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + "/item",
        join: {
          from: "location_stock_alert.item_id",
          to: "items.id",
        },
      },
      uom: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + "/uom",
        join: {
          from: "location_stock_alert.uom_id",
          to: "uoms.id",
        },
      },
      organization: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + "/organization",
        join: {
          from: "location_stock_alert.organization_id",
          to: "organizations.id",
        },
      },
    };
  }

  $beforeInsert() {
    this.created_at = new Date().toISOString();
    this.updated_at = this.created_at;
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
}

export default LocationStockAlert;
