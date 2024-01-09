import { Model } from "objection";

class OrgOrder extends Model {
  static get tableName() {
    return "org_orders";
  }

  id!: string;
  invoice_no!: string;
  invoice_date!: Date;
  type!: string;
  vendor_id!: string;
  b2b_customer_id!: string;
  customer_id!: string;
  location_id!: string;
  attender_id!: string;
  table_id!: string;
  gross_value!: number;
  tax_value!: number;
  offer_value!: number;
  net_value!: number;
  notes!: string;
  is_manual_discount!: boolean;
  manual_discount!: number;
  manual_discount_type!: string;
  manual_discount_notes!: string;
  status_id!: number;
  meta_data!: Record<string, any>;
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
        invoice_no: { type: "string" },
        invoice_date: { type: "string", format: "date" },
        type: {
          type: "string",
          enum: ["b2c_sales", "b2b_sales", "b2b_purchase"],
        },
        vendor_id: { type: "string", format: "uuid" },
        b2b_customer_id: { type: "string", format: "uuid" },
        customer_id: { type: "string", format: "uuid" },
        location_id: { type: "string", format: "uuid" },
        attender_id: { type: "string", format: "uuid" },
        table_id: { type: "string", format: "uuid" },
        gross_value: { type: "number" },
        tax_value: { type: "number" },
        offer_value: { type: "number" },
        net_value: { type: "number" },
        notes: { type: "string" },
        is_manual_discount: { type: "boolean" },
        manual_discount: { type: "number" },
        manual_discount_type: { type: "string" },
        manual_discount_notes: { type: "string" },
        status_id: { type: "number" },
        meta_data: { type: "object" },
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
    vendor: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/businessEntity",
      join: {
        from: "org_orders.vendor_id",
        to: "business_entities.id",
      },
    },
    b2bCustomer: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/businessEntity",
      join: {
        from: "org_orders.b2b_customer_id",
        to: "business_entities.id",
      },
    },
    customer: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/organizationUserProfile",
      join: {
        from: "org_orders.customer_id",
        to: "organization_user_profiles.id",
      },
    },
    location: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/location",
      join: {
        from: "org_orders.location_id",
        to: "locations.id",
      },
    },
    attender: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/organizationUserProfile",
      join: {
        from: "org_orders.attender_id",
        to: "organization_user_profiles.id",
      },
    },
    table: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/locationTable",
      join: {
        from: "org_orders.table_id",
        to: "location_tables.id",
      },
    },
    status: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/orderStatus",
      join: {
        from: "org_orders.status_id",
        to: "master_order_statuses.id",
      },
    },
    organization: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/organization",
      join: {
        from: "org_orders.organization_id",
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

export default OrgOrder;
