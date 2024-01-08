import { Model } from "objection";

class LocationCategory extends Model {
  static get tableName() {
    return "location_categories";
  }

  id!: string;
  location_id!: string;
  category_id!: string;
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
        category_id: { type: "string", format: "uuid" },
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
        from: "location_categories.location_id",
        to: "locations.id",
      },
    },
    category: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/category",
      join: {
        from: "location_categories.category_id",
        to: "categories.id",
      },
    },
    organization: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/organization",
      join: {
        from: "location_categories.organization_id",
        to: "organizations.id",
      },
    },
    client: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/client",
      join: {
        from: "location_categories.client_id",
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

export default LocationCategory;
