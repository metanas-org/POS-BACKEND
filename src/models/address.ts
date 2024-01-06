import { Model } from "objection";

class Address extends Model {
  static get tableName() {
    return "address";
  }

  id!: string;
  building?: string;
  address_line_1?: string;
  address_line_2?: string;
  street?: string;
  pincode?: string;
  state?: string;
  map_url?: string;
  latitude?: number;
  longitude?: number;
  country_id!: number;
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
        building: { type: "text" },
        address_line_1: { type: "text" },
        address_line_2: { type: "text" },
        street: { type: "text" },
        pincode: { type: "text" },
        state: { type: "text" },
        map_url: { type: "text" },
        latitude: { type: "number" },
        longitude: { type: "number" },
        country_id: { type: "integer" },
        organization_id: { type: "string", format: "uuid" },
        client_id: { type: "string", format: "uuid" },
        is_active: { type: "boolean" },
        created_at: { type: "string", format: "date-time" },
        updated_at: { type: "string", format: "date-time" },
      },
    };
  }

  static relationMappings = {
    country: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/country",
      join: {
        from: "address.country_id",
        to: "master_countries.id",
      },
    },
    organization: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/organization",
      join: {
        from: "address.organization_id",
        to: "organizations.id",
      },
    },
    client: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/client",
      join: {
        from: "address.client_id",
        to: "clients.id",
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

export default Address;
