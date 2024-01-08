import { Knex } from "knex";

export const up = async (knex: Knex): Promise<void> => {
  await knex.schema.createTable("location_payment_overrides", (table) => {
    table.uuid("id").defaultTo(knex.fn.uuid()).primary();
    table
      .uuid("location_payment_setting_id")
      .references("id")
      .inTable("location_payment_settings")
      .onDelete("CASCADE");
    table
      .uuid("role_id")
      .references("id")
      .inTable("user_roles")
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
  await knex.schema.dropTableIfExists("location_payment_overrides");
};
