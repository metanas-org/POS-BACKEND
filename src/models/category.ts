import { Model } from "objection";

class Category extends Model {
  static get tableName() {
    return "categories";
  }

  id!: string;
  name!: string;
  asset_id?: string;
  organization_id!: string;
  client_id!: string;
  is_active!: boolean;
  created_at!: string;
  updated_at!: string;
  created_by!: string;
  updated_by!: string;

  static get jsonSchema() {
    return {
      type: "object",
      properties: {
        id: { type: "string", format: "uuid" },
        name: { type: "string" },
        asset_id: { type: "string", format: "uuid" },
        organization_id: { type: "string", format: "uuid" },
        client_id: { type: "string", format: "uuid" },
        is_active: { type: "boolean" },
        created_at: { type: "string", format: "date-time" },
        updated_at: { type: "string", format: "date-time" },
      },
    };
  }

  static get relationMappings() {
    return {
      asset: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + "/asset",
        join: {
          from: "categories.asset_id",
          to: "assets.id",
        },
      },
      organization: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + "/organization",
        join: {
          from: "categories.organization_id",
          to: "organizations.id",
        },
      },
      client: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + "/client",
        join: {
          from: "categories.client_id",
          to: "clients.id",
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

export default Category;