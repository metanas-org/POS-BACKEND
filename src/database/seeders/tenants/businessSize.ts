import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("master_business_sizes").del();

  // Inserts seed entries
  await knex("master_business_sizes").insert([
    {
      id: 1,
      value: "1-10",
      is_active: true,
    },
    {
      id: 2,
      value: "10-30",
      is_active: true,
    },
    {
      id: 3,
      value: "30-50",
      is_active: true,
    },
    {
      id: 4,
      value: "50-100",
      is_active: true,
    },
    {
      id: 5,
      value: "100+",
      is_active: true,
    },
  ]);
}
