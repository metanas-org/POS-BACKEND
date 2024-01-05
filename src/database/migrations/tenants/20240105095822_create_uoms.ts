import { Knex } from "knex";

export const up = async (knex: Knex): Promise<void> => {
  await knex.schema.createTable("uoms", (table) => {
    table.uuid("id").defaultTo(knex.fn.uuid()).primary();
    table.text("name").notNullable();
    table
      .uuid("uom_category_id")
      .references("id")
      .inTable("uom_categories")
      .onDelete("CASCADE");
    table
      .integer("uom_category_type_id")
      .references("id")
      .inTable("master_uom_types")
      .onDelete("CASCADE");
    table.double("ratio");
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
  await knex.schema.dropTableIfExists("uoms");
};
