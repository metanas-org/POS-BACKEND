import { Model } from "objection";

class OrderStatus extends Model {
  static get tableName() {
    return "master_order_statuses";
  }

  id!: number;
  name!: string;
  is_active!: boolean;
  created_at!: string;
  updated_at!: string;

  static get jsonSchema() {
    return {
      type: "object",
      properties: {
        id: { type: "integer" },
        name: { type: "string" },
        is_active: { type: "boolean" },
        created_at: { type: "string", format: "date-time" },
        updated_at: { type: "string", format: "date-time" },
      },
    };
  }

  $beforeInsert() {
    this.created_at = new Date().toISOString();
    this.updated_at = this.created_at;
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
}

export default OrderStatus;
