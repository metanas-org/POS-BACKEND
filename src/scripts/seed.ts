import { config } from "dotenv";
config({ path: ".env" });
import { ConnectTenants } from "../database/helpers";
import * as path from "path";
import db from "../database";
const seederDir = path.join(__dirname, "../database/seeders/tenants");

const tenantConnections: any = {};

async function runSeed(tenantID: string, tenant: any) {
  await tenant.seed.run({
    directory: seederDir,
    extension: "ts",
  });

  console.log("\x1b[32mSeeded for Tenant :", tenantID);
}

async function make(name: string, connection: any) {
  await db.seed.make(name, {
    directory: seederDir,
    extension: "ts",
  });
}

function removePaths() {
  return process.argv.slice(2).filter((arg) => {
    return !arg.includes("/") && !arg.includes("\\") && !arg.includes(".");
  });
}

ConnectTenants(tenantConnections)
  .then(async () => {
    for (const tenant of Object.entries(tenantConnections)) {
      const [tenantId, connection] = tenant;

      const args = removePaths();

      const command = args[0];

      const param = args[1];

      if (command === "make") {
        await make(param, connection);
        process.exit(1);
      }

      if (args[0] === "seed") {
        await runSeed(tenantId, connection);
      }
    }
    process.exit(1);
  })

  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
