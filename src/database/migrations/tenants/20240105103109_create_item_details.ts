import { Knex } from "knex";

export const up = async (knex: Knex): Promise<void> => {
  await knex.schema.createTable("item_details", (table) => {
    table.uuid("id").defaultTo(knex.fn.uuid()).primary();
    table.text("item_code").notNullable();
    table.uuid("item_id").references("id").inTable("items").onDelete("CASCADE");
    table.text("variant_name");
    table.text("sku_code");
    table.text("barcode");
    table
      .uuid("base_uom_category_id")
      .references("id")
      .inTable("uom_categories")
      .onDelete("SET NULL");
    table.double("base_quantity");
    table
      .uuid("base_quantity_uom")
      .references("id")
      .inTable("uoms")
      .onDelete("SET NULL");
    table.double("cost_price");
    table.double("selling_price");
    table
      .uuid("selling_uom_id")
      .references("id")
      .inTable("uoms")
      .onDelete("SET NULL");
    table.text("vat_tax");
    table.boolean("is_composite").defaultTo(false);
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
  await knex.schema.dropTableIfExists("item_details");
};
