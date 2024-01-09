import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("master_location_types").del();

  // Inserts seed entries
  await knex("master_location_types").insert([
    {
      id: 1,
      name: "Store",
      is_active: true,
    },
    {
      id: 2,
      name: "Warehouse",
      is_active: true,
    },
  ]);
}
