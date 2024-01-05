import { Knex } from "knex";

export const up = async (knex: Knex): Promise<void> => {
  await knex.schema.createTable("address", (table) => {
    table.uuid("id").defaultTo(knex.fn.uuid()).primary();
    table.text("building");
    table.text("address_line_1");
    table.text("address_line_2");
    table.text("street");
    table.text("pincode");
    table.text("state");
    table.text("map_url");
    table.double("latitude");
    table.double("longitude");
    table
      .integer("country_id")
      .references("id")
      .inTable("master_countries")
      .onDelete("CASCADE");
    table
      .uuid("organization_id")
      .references("id")
      .inTable("organizations")
      .onDelete("CASCADE");
    table
      .uuid("client_id")
      .references("id")
      .inTable("clients")
      .onDelete("CASCADE");
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
  await knex.schema.dropTableIfExists("address");
};
