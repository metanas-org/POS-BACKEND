import { Model } from "objection";

class LocationInvoiceSetting extends Model {
  static get tableName() {
    return "location_invoice_settings";
  }

  id!: string;
  location_id!: string;
  custom_message?: string;
  is_cashier_displayed!: boolean;
  is_customer_name_displayed!: boolean;
  is_rate_of_item_displayed!: boolean;
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
        custom_message: { type: ["string", "null"] },
        is_cashier_displayed: { type: "boolean" },
        is_customer_name_displayed: { type: "boolean" },
        is_rate_of_item_displayed: { type: "boolean" },
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
        from: "location_invoice_settings.location_id",
        to: "locations.id",
      },
    },
    organization: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/organization",
      join: {
        from: "location_invoice_settings.organization_id",
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

export default LocationInvoiceSetting;
