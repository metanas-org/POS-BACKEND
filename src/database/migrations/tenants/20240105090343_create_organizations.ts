import { Knex } from "knex";

export const up = async (knex: Knex): Promise<void> => {
  await knex.schema.createTable("organizations", (table) => {
    table.uuid("id").defaultTo(knex.fn.uuid()).primary();
    table.string("name").notNullable();
    table.text("vat_number");
    table
      .integer("business_type_id")
      .references("id")
      .inTable("master_business_types")
      .onDelete("CASCADE");
    table.text("business_email_id");
    table
      .integer("business_size_id")
      .references("id")
      .inTable("master_business_sizes")
      .onDelete("CASCADE");
    table.uuid("contact_person_id");
    table.boolean("is_loyalty_offered").defaultTo(false).notNullable();
    table.double("loyalty_credit_redeeming_value");
    table.string("client_id");
    table.boolean("is_deleted").defaultTo(false).notNullable();
    table.boolean("is_active").defaultTo(true).notNullable();
    table.dateTime("created_at").defaultTo(knex.fn.now());
    table.dateTime("updated_at").defaultTo(knex.fn.now());
  });
};

export const down = async (knex: Knex): Promise<void> => {
  await knex.schema.dropTableIfExists("organizations");
};
