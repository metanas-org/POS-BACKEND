import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("master_business_types").del();

  // Inserts seed entries
  await knex("master_business_types").insert([
    {
      id: 1,
      name: "Manufacturing",
      is_active: true,
    },
    {
      id: 2,
      name: "Service",
      is_active: true,
    },
    {
      id: 3,
      name: "Retails",
      is_active: true,
    },
    {
      id: 4,
      name: "Wholesale",
      is_deleted: false,
      is_active: true,
    },
  ]);
}
