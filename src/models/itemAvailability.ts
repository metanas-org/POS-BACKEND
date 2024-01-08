import { Model } from "objection";

class ItemAvailability extends Model {
  static get tableName() {
    return "item_availabilities";
  }

  id!: string;
  item_id!: string;
  availability_id!: number;
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
        item_id: { type: "string", format: "uuid" },
        availability_id: { type: "integer" },
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
    item: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/item",
      join: {
        from: "item_availabilities.item_id",
        to: "items.id",
      },
    },
    availability: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/availability",
      join: {
        from: "item_availabilities.availability_id",
        to: "availabilities.id",
      },
    },
    organization: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/organization",
      join: {
        from: "item_availabilities.organization_id",
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

export default ItemAvailability;
