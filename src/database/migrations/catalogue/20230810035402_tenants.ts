import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("tenants", (table: any) => {
    table.uuid("id").primary().defaultTo(knex.fn.uuid());
    table.string("slug").notNullable().unique();
    table.string("host").notNullable();
    table.string("user").notNullable();
    table.string("password").notNullable();
    table.string("port").notNullable();
    table.string("database").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("tenants");
}
