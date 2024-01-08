import { Model } from "objection";

class LocationPaymentSetting extends Model {
  static get tableName() {
    return "location_payment_settings";
  }

  id!: string;
  location_id!: string;
  is_cash!: boolean;
  is_mobile_payment!: boolean;
  is_debit_card!: boolean;
  is_credit_card!: boolean;
  is_split_payment!: boolean;
  is_down_payment!: boolean;
  credit_limit_down_payment!: number;
  is_manual_discount!: boolean;
  is_price_override!: boolean;
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
        is_cash: { type: "boolean" },
        is_mobile_payment: { type: "boolean" },
        is_debit_card: { type: "boolean" },
        is_credit_card: { type: "boolean" },
        is_split_payment: { type: "boolean" },
        is_down_payment: { type: "boolean" },
        credit_limit_down_payment: { type: "number" },
        is_manual_discount: { type: "boolean" },
        is_price_override: { type: "boolean" },
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
        from: "location_payment_settings.location_id",
        to: "locations.id",
      },
    },
    organization: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/organization",
      join: {
        from: "location_payment_settings.organization_id",
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

export default LocationPaymentSetting;
