import { Knex } from "knex";

export const up = async (knex: Knex): Promise<void> => {
  await knex.schema.createTable("item_add_ons", (table) => {
    table.uuid("id").defaultTo(knex.fn.uuid()).primary();
    table.uuid("item_id").references("id").inTable("items").onDelete("CASCADE");
    table
      .uuid("group_id")
      .references("id")
      .inTable("org_add_on_groups")
      .onDelete("CASCADE");
    table.specificType("item_detail_ids", "uuid[]");

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
  await knex.schema.dropTableIfExists("item_add_ons");
};