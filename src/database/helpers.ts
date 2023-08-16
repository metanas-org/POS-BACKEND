import knex from "knex";
import configs from "./knexfile";
import { Tenant } from "../models";

/**
 * Creates a tenant-specific database connection using the provided configuration.
 *
 * @param {object} config - The configuration object for the database connection.
 * @param {string} config.host - The host of the database.
 * @param {string} config.database - The name of the database.
 * @param {string} config.user - The username for the database.
 * @param {string} config.password - The password for the database.
 * @param {number} config.port - The port number for the database.
 * @return {object} - The Knex instance representing the database connection.
 */
export const makeTenantConnection = ({
  slug,
  host,
  database,
  user,
  password,
  port,
}: any): object => {
  return knex({
    client: "postgresql",
    connection: {
      host,
      database,
      user,
      password,
      port,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      extension: "ts",
      directory: "./src/database/tenants",
      schemaName: slug,
    },
    seeds: {
      directory: "./seeders/tenants",
    },
    searchPath: [slug],
    debug: !!process.env.DB_DEBUG,
    useNullAsDefault: true,
  });
};

/**
 * Connects to multiple tenants and stores their connections in the context object.
 *
 * @param {any} context - The context object.
 * @return {Promise<void>} A promise that resolves when all tenants are connected.
 */
export async function ConnectTenants(context: any): Promise<void> {
  try {
    const config = configs[process.env.NODE_ENV || "development"];
    const db = knex(config);

    const tenants: any = await Tenant.query(db).select([
      "id",
      "host",
      "database",
      "user",
      "password",
      "port",
      "slug",
    ]);

    if (Boolean(tenants.length)) {
      for (const tenant of tenants) {
        const tenantConnection: any = makeTenantConnection(tenant);
        context[tenant.id] = tenantConnection;
      }
    }
  } catch (error) {
    console.log(error);
  }
}
