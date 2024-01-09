import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("master_item_types").del();

  // Inserts seed entries
  await knex("master_item_types").insert([
    {
      id: 1,
      name: "Induvidual",
      is_active: true,
    },
    {
      id: 2,
      name: "Variant",
      is_active: true,
    },
  ]);
}
