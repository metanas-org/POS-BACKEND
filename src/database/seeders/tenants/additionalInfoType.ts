import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("master_additional_info_types").del();

  // Inserts seed entries
  await knex("master_additional_info_types").insert([
    {
      id: 1,
      name: "Text",
      is_active: true,
    },
    {
      id: 2,
      name: "Dropdown",
      is_active: true,
    },
  ]);
}
