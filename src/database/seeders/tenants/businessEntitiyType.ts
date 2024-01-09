import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("master_business_entity_type").del();

  // Inserts seed entries
  await knex("master_business_entity_type").insert([
    {
      id: 1,
      name: "Vendor",
      is_active: true,
    },
    {
      id: 2,
      name: "Customer",
      is_active: true,
    },
  ]);
}
