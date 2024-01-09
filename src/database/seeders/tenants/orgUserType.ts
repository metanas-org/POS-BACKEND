import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("master_organization_user_types").del();

  // Inserts seed entries
  await knex("master_organization_user_types").insert([
    {
      id: 1,
      name: "Employee",
      is_active: true,
    },
    {
      id: 2,
      name: "Agent",
      is_active: true,
    },
    {
      id: 3,
      name: "Customer",
      is_active: true,
    },
  ]);
}
