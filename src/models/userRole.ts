import { Model } from "objection";

class UserRole extends Model {
  static get tableName() {
    return "user_roles";
  }

  id!: string;
  name!: string;
  is_active!: boolean;
  created_at!: string;
  updated_at!: string;

  static relationMappings = {
    locationPaymentOverride: {
      relation: Model.HasManyRelation,
      modelClass: __dirname + "/locationPaymentOverride",
      join: {
        from: "user_roles.id",
        to: "location_payment_overrides.role_id",
      },
    },
  };

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        id: { type: "string", format: "uuid" },
        name: { type: "string", nullable: false, minLength: 1 },
        iso_code: { type: "string", nullable: false, minLength: 1 },
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

export default UserRole;
