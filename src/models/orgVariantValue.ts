import { Model } from "objection";

class OrgVariantValue extends Model {
  static get tableName() {
    return "org_variant_values";
  }

  id!: number;
  name!: string;
  variant_id!: number;
  organization_id!: string;
  client_id!: string;
  is_active!: boolean;
  created_at!: string;
  updated_at!: string;
  created_by!: string;
  updated_by!: string;
  is_deleted?: boolean;

  static get jsonSchema() {
    return {
      type: "object",
      properties: {
        id: { type: "integer" },
        name: { type: "text" },
        variant_id: { type: "integer" },
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
        from: "org_variant_values.organization_id",
        to: "organizations.id",
      },
    },
    variant: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/orgVariant",
      join: {
        from: "org_variant_values.variant_id",
        to: "org_variants.id",
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

export default OrgVariantValue;
