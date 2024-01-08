import { Knex } from "knex";

export const up = async (knex: Knex): Promise<void> => {
  await knex.schema.createTable("items", (table) => {
    table.uuid("id").defaultTo(knex.fn.uuid()).primary();
    table.text("name").notNullable();
    table.text("description");
    table.text("hsn_code");
    table
      .uuid("item_category_id")
      .references("id")
      .inTable("categories")
      .onDelete("CASCADE");
    table
      .uuid("item_brand_id")
      .references("id")
      .inTable("brands")
      .onDelete("CASCADE");
    table
      .integer("item_type_id")
      .references("id")
      .inTable("master_item_types")
      .onDelete("CASCADE");
    table.double("item_preparation_time");
    table.boolean("mark_as_favourite").defaultTo(false);
    table.boolean("is_item_an_addon").defaultTo(false);
    table.boolean("can_addon_be_in_catalog").defaultTo(false);
    table.boolean("display_variants_in_catalog").defaultTo(false);
    table.boolean("is_purchaseable").defaultTo(false);
    table.boolean("is_sellable").defaultTo(false);
    table.boolean("is_returnable").defaultTo(false);
    table.integer("return_window_in_days");
    table.boolean("is_only_exchangeable").defaultTo(false);
    table.boolean("is_stock_trackable").defaultTo(false);
    table
      .uuid("trace_stock_uom_id")
      .references("id")
      .inTable("uoms")
      .onDelete("CASCADE");
    table.boolean("is_stock_trace_by_batch").defaultTo(false);
    table.boolean("is_stock_trace_by_serial").defaultTo(false);

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
  await knex.schema.dropTableIfExists("items");
};
