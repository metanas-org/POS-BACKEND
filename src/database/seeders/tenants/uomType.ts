import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("master_uom_types").del();

  // Inserts seed entries
  await knex("master_uom_types").insert([
    {
      id: 1,
      name: "Smaller than reference",
      is_active: true,
    },
    {
      id: 2,
      name: "Reference",
      is_active: true,
    },
    {
      id: 3,
      name: "Bigger than reference",
      is_active: true,
    },
  ]);
}
