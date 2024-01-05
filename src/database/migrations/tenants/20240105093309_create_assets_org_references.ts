import { Knex } from "knex";

export const up = async (knex: Knex): Promise<void> => {
  await knex.schema.alterTable("organizations", (table) => {
    table
      .uuid("address_id")
      .references("id")
      .inTable("address")
      .onDelete("SET NULL");
    table
      .uuid("logo_asset_id")
      .references("id")
      .inTable("assets")
      .onDelete("SET NULL");
    table
      .uuid("loyalty_banner_asset_id")
      .references("id")
      .inTable("assets")
      .onDelete("SET NULL");
  });

  await knex.schema.alterTable("organization_user_profiles", (table) => {
    table
      .uuid("address_id")
      .references("id")
      .inTable("address")
      .onDelete("SET NULL");
    table
      .uuid("profile_asset_id")
      .references("id")
      .inTable("assets")
      .onDelete("SET NULL");
  });
};

export const down = async (knex: Knex): Promise<void> => {
  await knex.schema.alterTable("organizations", (table) => {
    table.dropColumn("address_id");
    table.dropColumn("logo_asset_id");
    table.dropColumn("loyalty_banner_asset_id");
  });

  await knex.schema.alterTable("organization_user_profiles", (table) => {
    table.dropColumn("address_id");
    table.dropColumn("profile_asset_id");
  });
};
