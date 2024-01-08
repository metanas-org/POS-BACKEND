import { Knex } from "knex";

export const up = async (knex: Knex): Promise<void> => {
  await knex.schema.createTable("organization_user_profiles", (table) => {
    table.uuid("id").defaultTo(knex.fn.uuid()).primary();
    table.integer("user_id");
    table.string("name").notNullable();
    table
      .integer("user_type_id")
      .references("id")
      .inTable("master_organization_user_types")
      .onDelete("CASCADE");
    table.text("first_name");
    table.text("last_name");
    table.text("gender");
    table.date("dob");
    table.text("nationality");
    table.text("blood_group");
    table.text("marital_status");
    table.text("religion");
    table.text("email_id");
    table.integer("mobile_no_std_code");
    table.text("mobile_no");
    table.boolean("is_shift_hours_trackable").defaultTo(false);
    table.boolean("is_loyalty_applicable").defaultTo(false);
    table.boolean("can_login").defaultTo(false);
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
  });
};

export const down = async (knex: Knex): Promise<void> => {
  await knex.schema.dropTableIfExists("organization_user_profiles");
};
