import { Model } from "objection";

class OrgLocationRunningStock extends Model {
  static get tableName() {
    return "org_location_running_stock";
  }

  id!: string;
  location_id!: string;
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
        location_id: { type: "string", format: "uuid" },
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
    location: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/location",
      join: {
        from: "org_location_running_stock.location_id",
        to: "locations.id",
      },
    },
    item: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/item",
      join: {
        from: "org_location_running_stock.item_id",
        to: "items.id",
      },
    },
    itemVariant: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/itemVariant",
      join: {
        from: "org_location_running_stock.item_variant_id",
        to: "item_variants.id",
      },
    },
    uom: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/uom",
      join: {
        from: "org_location_running_stock.uom_id",
        to: "uoms.id",
      },
    },
    organization: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/organization",
      join: {
        from: "org_location_running_stock.organization_id",
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

export default OrgLocationRunningStock;
