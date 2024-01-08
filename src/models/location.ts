import { Model } from "objection";

class Location extends Model {
  static get tableName() {
    return "locations";
  }

  id!: string;
  name!: string;
  email!: string;
  mobile_no_std_code!: number;
  mobile_no!: number;
  address_id!: string;
  location_type_id!: number;
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
        name: { type: "string" },
        email: { type: "string" },
        mobile_no_std_code: { type: "integer" },
        mobile_no: { type: "integer" },
        address_id: { type: "string", format: "uuid" },
        location_type_id: { type: "integer" },
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
    address: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/address",
      join: {
        from: "locations.address_id",
        to: "address.id",
      },
    },
    locationType: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/locationType",
      join: {
        from: "locations.location_type_id",
        to: "master_location_types.id",
      },
    },
    asset: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/asset",
      join: {
        from: "locations.asset_id",
        to: "assets.id",
      },
    },
    organization: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/organization",
      join: {
        from: "locations.organization_id",
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

export default Location;
