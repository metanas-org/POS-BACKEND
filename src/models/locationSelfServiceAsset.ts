import { Model } from "objection";

class LocationSelfServiceAsset extends Model {
  static get tableName() {
    return "location_self_service_assets";
  }

  id!: string;
  location_id!: string;
  asset_id!: string;
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
        asset_id: { type: "string", format: "uuid" },
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
        from: "location_self_service_assets.location_id",
        to: "locations.id",
      },
    },
    asset: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/asset",
      join: {
        from: "location_self_service_assets.asset_id",
        to: "assets.id",
      },
    },
    organization: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/organization",
      join: {
        from: "location_self_service_assets.organization_id",
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

export default LocationSelfServiceAsset;
