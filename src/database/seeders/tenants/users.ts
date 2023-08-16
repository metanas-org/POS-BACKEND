import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    {
      name: "John Doe",
      email: "johndoe@example.com",
      password: "a1B!cDe2",
      mobile_no: "+1234567890",
    },
    {
      name: "Jane Smith",
      email: "janesmith@example.com",
      password: "xYz#9876",
      mobile_no: "+9876543210",
    },
    {
      name: "Michael Johnson",
      email: "michaeljohnson@example.com",
      password: "pQr$54321",
      mobile_no: "+5555555555",
    },
    {
      name: "Emily Williams",
      email: "emilywilliams@example.com",
      password: "lOv3&4567",
      mobile_no: "+1111111111",
    },
    {
      name: "David Brown",
      email: "davidbrown@example.com",
      password: "zZx*12345",
      mobile_no: "+9876543210",
    },
  ]);
}
