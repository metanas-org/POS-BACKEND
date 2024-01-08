import { Knex } from "knex";

export const up = async (knex: Knex): Promise<void> => {
  await knex.schema.createTable("org_orders", (table) => {
    table.uuid("id").defaultTo(knex.fn.uuid()).primary();
    table.text("invoice_no").unique();
    table.date("invoice_date");
    table.string("type"); //enum

    table
      .uuid("vendor_id")
      .references("id")
      .inTable("business_entities")
      .onDelete("CASCADE");
    table
      .uuid("b2b_customer_id")
      .references("id")
      .inTable("business_entities")
      .onDelete("CASCADE");
    table
      .uuid("customer_id")
      .references("id")
      .inTable("organization_user_profiles")
      .onDelete("CASCADE");
    table
      .uuid("location_id")
      .references("id")
      .inTable("locations")
      .onDelete("CASCADE");
    table
      .uuid("attender_id")
      .references("id")
      .inTable("organization_user_profiles")
      .onDelete("CASCADE");
    table
      .uuid("table_id")
      .references("id")
      .inTable("location_tables")
      .onDelete("CASCADE");
    table.double("gross_value");
    table.double("tax_value");
    table.double("offer_value");
    table.double("net_value");
    table.text("notes");
    table.boolean("is_manual_discount").defaultTo(false);
    table.double("manual_discount");
    table.text("manual_discount_type");
    table.text("manual_discount_notes");
    table
      .integer("status_id")
      .references("id")
      .inTable("master_order_statuses")
      .onDelete("CASCADE");
    table.jsonb("meta_data");

    table
      .uuid("organization_id")
      .references("id")
      .inTable("organizations")
      .onDelete("CASCADE");
    table.string("client_id");
    table.boolean("is_active").defaultTo(true).notNullable();
    table.dateTime("created_at").defaultTo(knex.fn.now());
    table.dateTime("updated_at").defaultTo(knex.fn.now());
    table.boolean("is_deleted").defaultTo(false).notNullable();
    table
      .uuid("created_by")
      .references("id")
      .inTable("organization_user_profiles")
      .onDelete("CASCADE");
    table
      .uuid("updated_by")
      .references("id")
      .inTable("organization_user_profiles")
      .onDelete("CASCADE");
  });
};

export const down = async (knex: Knex): Promise<void> => {
  await knex.schema.dropTableIfExists("org_orders");
};
