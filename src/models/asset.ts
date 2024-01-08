import { Model } from "objection";

class Asset extends Model {
  static get tableName() {
    return "assets";
  }

  id!: string;
  asset_type!: string;
  asset_url!: string;
  organization_id?: string;
  client_id?: string;
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
        asset_type: { type: "text" },
        asset_url: { type: "text" },
        organization_id: { type: "string", format: "uuid" },
        client_id: { type: "string" },
        is_active: { type: "boolean" },
        created_at: { type: "string", format: "date-time" },
        updated_at: { type: "string", format: "date-time" },
        is_deleted: { type: "boolean" },
        created_by: { type: "string" },
        updated_by: { type: "string" },
      },
    };
  }

  static relationMappings = {
    organization: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/organization",
      join: {
        from: "assets.organization_id",
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

export default Asset;
