import { Model } from "objection";

class OrgRunningStockItemDetail extends Model {
  static get tableName() {
    return "org_running_stock_item_details";
  }

  id!: string;
  running_stock_id!: string;
  batch_no!: string;
  serial_no!: string;
  quantity!: number;
  expiry_date!: string;

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
        running_stock_id: { type: "string", format: "uuid" },
        batch_no: { type: "string" },
        serial_no: { type: "string" },
        quantity: { type: "number" },
        expiry_date: { type: "string", format: "date" },
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
    runningStock: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/orgLocationRunningStock",
      join: {
        from: "org_running_stock_item_details.running_stock_id",
        to: "org_location_running_stock.id",
      },
    },
    organization: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/organization",
      join: {
        from: "org_running_stock_item_details.organization_id",
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

export default OrgRunningStockItemDetail;
