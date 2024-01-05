import { Model } from "objection";

class ItemType extends Model {
  static get tableName() {
    return "master_item_types";
  }

  id!: number;
  value!: string;
  is_active!: boolean;
  created_at!: string;
  updated_at!: string;

  static relationMappings = {
    item: {
      relation: Model.HasManyRelation,
      modelClass: __dirname + "/item",
      join: {
        from: "master_item_types.id",
        to: "items.item_type_id",
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

module.exports = ItemType;
