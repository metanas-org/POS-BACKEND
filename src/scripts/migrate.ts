import { config } from "dotenv";
config({ path: ".env" });
import { ConnectTenants } from "../database/helpers";
import * as path from "path";
const migrationsDir = path.join(__dirname, "../database/migrations/tenants");

const tenantConnections: any = {};
const args = process.argv;

async function runMigrations(tenantID: string, tenant: any) {
  await tenant.migrate.latest({
    directory: migrationsDir,
  });

  console.log("\x1b[32mMigrations ran successfully for Tenant :", tenantID);
}

async function rollbackMigrations(tenantID: string, tenant: any) {
  try {
    await tenant.migrate.rollback({ directory: migrationsDir });
    console.log("\x1b[32mRollback for Tenant :", tenantID);
  } catch (error) {
    console.error("Error rolling back migrations:", error);
  } finally {
    tenant.destroy();
  }
}

ConnectTenants(tenantConnections)
  .then(async () => {
    for (const tenant of Object.entries(tenantConnections)) {
      const [tenantId, connection] = tenant;

      if (args[args.length - 1] === "migrate") {
        await runMigrations(tenantId, connection);
      }

      if (args[args.length - 1] === "rollback") {
        await rollbackMigrations(tenantId, connection);
      }
    }
    process.exit(1);
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
