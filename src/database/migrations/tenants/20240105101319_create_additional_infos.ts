import { Knex } from "knex";

export const up = async (knex: Knex): Promise<void> => {
  await knex.schema.createTable("additional_infos", (table) => {
    table.uuid("id").defaultTo(knex.fn.uuid()).primary();
    table.text("name").notNullable();
    table.specificType("labels", "text[]");
    table.boolean("is_display_on_catalog").defaultTo(false);
    table
      .integer("additional_info_type_id")
      .references("id")
      .inTable("master_additional_info_types")
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
  await knex.schema.dropTableIfExists("additional_infos");
};
