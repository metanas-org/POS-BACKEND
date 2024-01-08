import { Knex } from "knex";

export const up = async (knex: Knex): Promise<void> => {
  await knex.schema.createTable("location_order_settings", (table) => {
    table.uuid("id").defaultTo(knex.fn.uuid()).primary();
    table
      .uuid("location_id")
      .references("id")
      .inTable("locations")
      .onDelete("CASCADE");

    table.boolean("is_customer_name_required").defaultTo(false);
    table.boolean("is_returnable").defaultTo(false);
    table
      .uuid("return_doc_asset_id")
      .references("id")
      .inTable("assets")
      .onDelete("SET NULL");
    table.double("return_window_in_days"); //

    table.boolean("is_only_exchangeable").defaultTo(false);
    table.boolean("is_order_specialist_displayable").defaultTo(false);
    table.boolean("is_order_status_displayable").defaultTo(false);
    table.text("order_status_display_access_code");
    table.text("order_access_link");
    table.boolean("is_self_serviceable").defaultTo(false);
    table.boolean("is_pre_orderable").defaultTo(false);

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
  await knex.schema.dropTableIfExists("location_order_settings");
};
