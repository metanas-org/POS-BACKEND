import { Knex } from "knex";

export const up = async (knex: Knex): Promise<void> => {
  await knex.schema.createTable("master_additional_info_types", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.boolean("is_active").defaultTo(true).notNullable();
    table.dateTime("created_at").defaultTo(knex.fn.now());
    table.dateTime("updated_at").defaultTo(knex.fn.now());
  });
};

export const down = async (knex: Knex): Promise<void> => {
  await knex.schema.dropTableIfExists("master_additional_info_types");
};
