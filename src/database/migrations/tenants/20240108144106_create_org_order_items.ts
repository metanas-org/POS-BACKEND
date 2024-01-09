import { Knex } from "knex";

export const up = async (knex: Knex): Promise<void> => {
  await knex.schema.createTable("org_order_items", (table) => {
    table.uuid("id").defaultTo(knex.fn.uuid()).primary();

    table
      .uuid("order_id")
      .references("id")
      .inTable("org_orders")
      .onDelete("CASCADE");
    table
      .uuid("order_item_id")
      .references("id")
      .inTable("stock_adjusted_items")
      .onDelete("CASCADE");

    table.double("gross_value");
    table.double("tax_value");
    table.double("offer_value");
    table.double("net_value");
    table.boolean("is_returned").defaultTo(false);
    table.boolean("is_exchanged").defaultTo(false);
    table
      .uuid("return_exchange_reason_id")
      .references("id")
      .inTable("order_return_exchange_reasons")
      .onDelete("CASCADE");

    table.text("return_exchange_notes");
    table.boolean("was_returned_item_checked").defaultTo(false);
    table
      .uuid("exchanged_with_item_id")
      .references("id")
      .inTable("org_order_items")
      .onDelete("CASCADE");

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
  await knex.schema.dropTableIfExists("org_order_items");
};
