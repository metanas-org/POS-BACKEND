import { Model } from "objection";

class LocationPaymentOverride extends Model {
  static get tableName() {
    return "location_payment_overrides";
  }

  id!: string;
  location_payment_setting_id!: string;
  role_id!: string;
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
        location_payment_setting_id: { type: "string", format: "uuid" },
        role_id: { type: "string", format: "uuid" },
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
    locationPaymentSetting: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/locationPaymentSetting",
      join: {
        from: "location_payment_overrides.location_payment_setting_id",
        to: "location_payment_settings.id",
      },
    },
    role: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/userRole",
      join: {
        from: "location_payment_overrides.role_id",
        to: "user_roles.id",
      },
    },
    organization: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/organization",
      join: {
        from: "location_payment_overrides.organization_id",
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

export default LocationPaymentOverride;
