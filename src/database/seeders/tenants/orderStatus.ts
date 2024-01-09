import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("master_order_statuses").del();

  // Inserts seed entries
  await knex("master_order_statuses").insert([
    {
      id: 1,
      name: "Pending",
      is_active: true,
    },
    {
      id: 2,
      name: "Executed",
      is_active: true,
    },
    {
      id: 3,
      name: "Payment_Successfull",
      is_active: true,
    },
    {
      id: 4,
      name: "Payment_Failed",
      is_active: true,
    },
    {
      id: 5,
      name: "Rejected",
      is_active: true,
    },
    {
      id: 6,
      name: "Returned",
      is_active: true,
    },
  ]);
}
