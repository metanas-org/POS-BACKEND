import { Model } from "objection";

class Availability extends Model {
  static get tableName() {
    return "availabilities";
  }

  id!: number;
  name!: string;
  from!: string;
  to!: string;
  organization_id!: string;
  client_id!: string;
  is_active!: boolean;
  created_at!: string;
  updated_at!: string;
  is_deleted?: boolean;
  created_by!: string;
  updated_by!: string;

  static get jsonSchema() {
    return {
      type: "object",
      properties: {
        id: { type: "integer" },
        name: { type: "text" },
        from: { type: "string", format: "date-time" },
        to: { type: "string", format: "date-time" },
        organization_id: { type: "string", format: "uuid" },
        client_id: { type: "string", format: "uuid" },
        is_active: { type: "boolean" },
        created_at: { type: "string", format: "date-time" },
        updated_at: { type: "string", format: "date-time" },
        is_deleted: { type: "boolean" },
        created_by: { type: "string" },
        updated_by: { type: "string" },
      },
    };
  }

  static relationMappings = {
    organization: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/organization",
      join: {
        from: "availabilities.organization_id",
        to: "organizations.id",
      },
    },
    client: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/client",
      join: {
        from: "availabilities.client_id",
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

export default Availability;
