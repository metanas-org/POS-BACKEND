import { Knex } from "knex";

export const up = async (knex: Knex): Promise<void> => {
  await knex.schema.createTable("business_entities", (table) => {
    table.uuid("id").defaultTo(knex.fn.uuid()).primary();
    table.text("name");
    table.text("vat_number");
    table
      .uuid("address_id")
      .references("id")
      .inTable("address")
      .onDelete("SET NULL");

    table
      .integer("type_id")
      .references("id")
      .inTable("master_business_entity_type")
      .onDelete("CASCADE");

    table.text("email_id");
    table.integer("mobile_no_std_code");
    table.text("mobile_no");

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
  await knex.schema.dropTableIfExists("business_entities");
};
