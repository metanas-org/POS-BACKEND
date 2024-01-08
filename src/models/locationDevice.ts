import { Model } from "objection";

class LocationDevice extends Model {
  static get tableName() {
    return "location_devices";
  }

  id!: string;
  location_id!: string;
  organization_user_profile_id!: string;
  is_approved!: boolean;
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
        organization_user_profile_id: { type: "string", format: "uuid" },
        is_approved: { type: "boolean" },
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
        from: "location_devices.location_id",
        to: "locations.id",
      },
    },
    userProfile: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/organizationUserProfile",
      join: {
        from: "location_devices.organization_user_profile_id",
        to: "organization_user_profiles.id",
      },
    },
    organization: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/organization",
      join: {
        from: "location_devices.organization_id",
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

export default LocationDevice;
