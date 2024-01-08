import { Knex } from "knex";

export const up = async (knex: Knex): Promise<void> => {
  await knex.schema.createTable("org_running_stock_item_details", (table) => {
    table.uuid("id").defaultTo(knex.fn.uuid()).primary();

    table
      .uuid("running_stock_id")
      .references("id")
      .inTable("org_location_running_stock")
      .onDelete("CASCADE");

    table.text("batch_no");
    table.text("serial_no");
    table.double("quantity");
    table.date("expiry_date");

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
  await knex.schema.dropTableIfExists("org_running_stock_item_details");
};
