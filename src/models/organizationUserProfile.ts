import { Model } from "objection";

class OrganizationUserProfile extends Model {
  static get tableName() {
    return "organization_user_profiles";
  }

  id!: string;
  user_id?: number;
  name?: string;
  user_type_id!: number;
  first_name?: string;
  last_name?: string;
  gender?: string;
  dob?: string;
  nationality?: string;
  blood_group?: string;
  marital_status?: string;
  religion?: string;
  email_id?: string;
  mobile_no_std_code?: number;
  mobile_no?: string;
  address_id?: string;
  profile_asset_id?: string;
  is_shift_hours_trackable?: boolean;
  is_loyalty_applicable?: boolean;
  can_login?: boolean;
  organization_id?: string;
  client_id?: string;
  is_active!: boolean;
  created_at!: string;
  updated_at!: string;
  created_by?: string;
  updated_by?: string;

  static get jsonSchema() {
    return {
      type: "object",
      properties: {
        id: { type: "string", format: "uuid" },
        user_id: { type: "integer" },
        name: { type: "string" },
        user_type_id: { type: "integer" },
        first_name: { type: "text" },
        last_name: { type: "text" },
        gender: { type: "text" },
        dob: { type: "date" },
        nationality: { type: "text" },
        blood_group: { type: "text" },
        marital_status: { type: "text" },
        religion: { type: "text" },
        email_id: { type: "text" },
        mobile_no_std_code: { type: "integer" },
        mobile_no: { type: "text" },
        address_id: { type: "string", format: "uuid" },
        profile_asset_id: { type: "string", format: "uuid" },
        is_shift_hours_trackable: { type: "boolean" },
        is_loyalty_applicable: { type: "boolean" },
        can_login: { type: "boolean" },
        organization_id: { type: "string", format: "uuid" },
        client_id: { type: "string", format: "uuid" },
        is_active: { type: "boolean" },
        created_at: { type: "string", format: "uuid" },
        updated_at: { type: "string", format: "uuid" },
        is_deleted: { type: "boolean" },
      },
    };
  }

  static relationMappings = {
    userType: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/organizationUserType",
      join: {
        from: "organization_user_profiles.user_type_id",
        to: "master_organization_user_types.id",
      },
    },
    organization: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/organization",
      join: {
        from: "organization_user_profiles.organization_id",
        to: "organizations.id",
      },
    },
    client: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/client",
      join: {
        from: "organization_user_profiles.client_id",
        to: "clients.id",
      },
    },
    profileAsset: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/asset",
      join: {
        from: "organization_user_profiles.profile_asset_id",
        to: "assets.id",
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

module.exports = OrganizationUserProfile;
