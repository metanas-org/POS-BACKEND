import { Model } from "objection";

class OrganizationUserType extends Model {
  static get tableName() {
    return "master_organization_user_types";
  }

  id!: number;
  name!: string;
  is_active!: boolean;
  created_at!: string;
  updated_at!: string;

  static relationMappings = {
    organizationUserProfiles: {
      relation: Model.HasManyRelation,
      modelClass: __dirname + "/organization",
      join: {
        from: "master_organization_user_types.id",
        to: "organization_user_profiles.user_type_id",
      },
    },
  };

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        id: { type: "integer" },
        name: { type: "string", nullable: false, minLength: 1 },
        is_active: { type: "boolean" },
        created_at: {
          type: "string",
          format: "date-time",
        },
        updated_at: {
          type: "string",
          format: "date-time",
        },
      },
    };
  }
  $beforeInsert() {
    this.created_at = new Date().toISOString();
    this.updated_at = this.created_at;
  }

  $beforeUpdate() {
    // Update the updated_at timestamp
    this.updated_at = new Date().toISOString();
  }
}

export default OrganizationUserType;
