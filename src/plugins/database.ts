import { FastifyPluginCallback } from "fastify";
import knex, { Knex } from "knex";
import configs from "../database/knexfile";
import fp from "fastify-plugin";

declare module "fastify" {
  interface FastifyInstance {
    catalogue: Knex;
  }
}

const initConnections: FastifyPluginCallback<any> = async (fastify: any) => {
  try {
    const config = configs[process.env.NODE_ENV || "development"];
    const db = knex(config);
    fastify.decorate("catalogue", db);
  } catch (error) {
    console.error("Plugin Error:", error);
  }
};

export default fp(initConnections);
