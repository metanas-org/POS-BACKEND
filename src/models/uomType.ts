import { Model } from "objection";

class UomType extends Model {
  static get tableName() {
    return "master_uom_types";
  }

  id!: number;
  name!: string;
  is_active!: boolean;
  created_at!: string;
  updated_at!: string;

  static relationMappings = {
    uom: {
      relation: Model.HasManyRelation,
      modelClass: __dirname + "/uom",
      join: {
        from: "master_uom_types.id",
        to: "uoms.uom_category_type_id",
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

module.exports = UomType;
