import { Model } from "objection";

class OrgOrderItem extends Model {
  static get tableName() {
    return "org_order_items";
  }

  id!: string;
  order_id!: string;
  order_item_id!: string;
  gross_value!: number;
  tax_value!: number;
  offer_value!: number;
  net_value!: number;
  is_returned!: boolean;
  is_exchanged!: boolean;
  return_exchange_reason_id!: string;
  return_exchange_notes!: string;
  was_returned_item_checked!: boolean;
  exchanged_with_item_id!: string;
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
        order_id: { type: "string", format: "uuid" },
        order_item_id: { type: "string", format: "uuid" },
        gross_value: { type: "number" },
        tax_value: { type: "number" },
        offer_value: { type: "number" },
        net_value: { type: "number" },
        is_returned: { type: "boolean" },
        is_exchanged: { type: "boolean" },
        return_exchange_reason_id: { type: "string", format: "uuid" },
        return_exchange_notes: { type: "string" },
        was_returned_item_checked: { type: "boolean" },
        exchanged_with_item_id: { type: "string", format: "uuid" },
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
    order: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/orgOrder",
      join: {
        from: "org_order_items.order_id",
        to: "org_orders.id",
      },
    },
    orderItem: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/stockAdjustedItem",
      join: {
        from: "org_order_items.order_item_id",
        to: "stock_adjusted_items.id",
      },
    },
    returnExchangeReason: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/orderReturnExchangeReason",
      join: {
        from: "org_order_items.return_exchange_reason_id",
        to: "order_return_exchange_reasons.id",
      },
    },
    exchangedWithItem: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/orgOrderItem",
      join: {
        from: "org_order_items.exchanged_with_item_id",
        to: "org_order_items.id",
      },
    },
    organization: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/organization",
      join: {
        from: "org_order_items.organization_id",
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

export default OrgOrderItem;
