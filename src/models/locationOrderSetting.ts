import { Model } from "objection";

class LocationOrderSetting extends Model {
  static get tableName() {
    return "location_order_settings";
  }

  id!: string;
  location_id!: string;
  is_customer_name_required!: boolean;
  is_returnable!: boolean;
  return_doc_asset_id!: string;
  return_window_in_days!: number;
  is_only_exchangeable!: boolean;
  is_order_specialist_displayable!: boolean;
  is_order_status_displayable!: boolean;
  order_status_display_access_code!: string;
  order_access_link!: string;
  is_self_serviceable!: boolean;
  is_pre_orderable!: boolean;
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
        is_customer_name_required: { type: "boolean" },
        is_returnable: { type: "boolean" },
        return_doc_asset_id: { type: "string", format: "uuid" },
        return_window_in_days: { type: "number" },
        is_only_exchangeable: { type: "boolean" },
        is_order_specialist_displayable: { type: "boolean" },
        is_order_status_displayable: { type: "boolean" },
        order_status_display_access_code: { type: "string" },
        order_access_link: { type: "string" },
        is_self_serviceable: { type: "boolean" },
        is_pre_orderable: { type: "boolean" },
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
        from: "location_order_settings.location_id",
        to: "locations.id",
      },
    },
    returnDocAsset: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/asset",
      join: {
        from: "location_order_settings.return_doc_asset_id",
        to: "assets.id",
      },
    },
    organization: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/organization",
      join: {
        from: "location_order_settings.organization_id",
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

export default LocationOrderSetting;
