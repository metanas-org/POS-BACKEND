import { Model } from "objection";

class OrgVariant extends Model {
  static get tableName() {
    return "org_variants";
  }

  id!: number;
  name!: string;
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
        id: { type: "integer" },
        name: { type: "text" },
        organization_id: { type: "string" },
        client_id: { type: "string" },
        is_active: { type: "boolean" },
        created_at: { type: "string", format: "date-time" },
        updated_at: { type: "string", format: "date-time" },
      },
    };
  }

  static relationMappings = {
    organization: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/organization",
      join: {
        from: "org_variants.organization_id",
        to: "organizations.id",
      },
    },
    client: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/client",
      join: {
        from: "org_variants.client_id",
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

export default OrgVariant;
