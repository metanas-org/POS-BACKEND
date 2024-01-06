import { Model } from "objection";

class Country extends Model {
  static get tableName() {
    return "master_countries";
  }

  id!: number;
  name!: string;
  iso_code!: string;
  is_active!: boolean;
  created_at!: string;
  updated_at!: string;

  static relationMappings = {
    organizations: {
      relation: Model.HasManyRelation,
      modelClass: __dirname + "/address",
      join: {
        from: "master_countries.id",
        to: "address.country_id",
      },
    },
  };

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        id: { type: "integer" },
        name: { type: "string", nullable: false, minLength: 1 },
        iso_code: { type: "string", nullable: false, minLength: 1 },
        is_active: { type: "boolean" },
        created_at: {
          type: "string",
          format: "date-time",
        },
        updated_at: {
          type: "string",
          format: "date-time",
        },
      },
    };
  }
  $beforeInsert() {
    this.created_at = new Date().toISOString();
    this.updated_at = this.created_at;
  }

  $beforeUpdate() {
    // Update the updated_at timestamp
    this.updated_at = new Date().toISOString();
  }
}

export default Country;
