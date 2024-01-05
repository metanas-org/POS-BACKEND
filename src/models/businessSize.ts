import { Model } from "objection";

class BusinessSize extends Model {
  static get tableName() {
    return "master_business_sizes";
  }

  id!: number;
  value!: string;
  is_active!: boolean;
  created_at!: string;
  updated_at!: string;

  static relationMappings = {
    organization: {
      relation: Model.HasManyRelation,
      modelClass: __dirname + "/organization",
      join: {
        from: "master_business_sizes.id",
        to: "organizations.business_size_id",
      },
    },
  };

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],

      properties: {
        id: { type: "integer" },
        value: { type: "string", nullable: false, minLength: 1 },
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

module.exports = BusinessSize;
