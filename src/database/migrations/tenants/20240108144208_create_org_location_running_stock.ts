import { Knex } from "knex";

export const up = async (knex: Knex): Promise<void> => {
  await knex.schema.createTable("org_location_running_stock", (table) => {
    table.uuid("id").defaultTo(knex.fn.uuid()).primary();

    table
      .uuid("location_id")
      .references("id")
      .inTable("locations")
      .onDelete("CASCADE");

    table.uuid("item_id").references("id").inTable("items").onDelete("CASCADE");
    table
      .uuid("item_variant_id")
      .references("id")
      .inTable("item_variants")
      .onDelete("CASCADE");
    table.double("quantity");
    table.uuid("uom_id").references("id").inTable("uoms").onDelete("CASCADE");

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
  await knex.schema.dropTableIfExists("org_location_running_stock");
};
