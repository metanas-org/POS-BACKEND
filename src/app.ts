import { join } from "path";
import AutoLoad, { AutoloadPluginOptions } from "@fastify/autoload";
import { FastifyPluginAsync } from "fastify";
import v1 from "./api/v1";
import { cpus } from "os";
import { ConnectTenants } from "./database/helpers";
import { Logger, handleResponse, responseType } from "./helpers";
import { signoz } from "./tracing";

signoz.start();
process.env.UV_THREADPOOL_SIZE = String(cpus().length);

// Global Context That Will Be Used to Maintains Database Connection Configurations
declare global {
  var tenantConnections: any;
}

global.tenantConnections = {};

ConnectTenants(global.tenantConnections)
  .then(() => {
    console.log(
      "\x1b[34m Available Tenants : ",
      Object.keys(globalThis.tenantConnections).length
    );
  })
  .catch((error: any) => {
    console.log(error);
  });

export type AppOptions = {
  // Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>;

// Pass --options via CLI arguments in command to enable these options.
const options: AppOptions = {};

const app: FastifyPluginAsync<AppOptions> = async (
  fastify,
  opts
): Promise<void> => {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application

  void fastify.register(AutoLoad, {
    dir: join(__dirname, "plugins"),
    options: opts,
  });
  // This loads all plugins defined in routes
  // define your routes in one of these
  void fastify.register(v1);
  fastify.addHook("preHandler", (request: any, response, next) => {
    // Swagger-Docs whitelisting
    if (/^\/docs(?:\/.*)?$/.test(request.url)) {
      return next();
    }

    if (!request.headers["x-tenant"]) {
      const logMessage = "Request Header 'x-tenant' is required";
      Logger.error(request, logMessage, false, "APP");
      return handleResponse(response, responseType.BAD_REQUEST, {
        data: {},
        customMessage: logMessage,
      });
    }

    // Decorate the request object with tenant-specific data
    request.tenantId = request.headers["x-tenant"];

    if (!globalThis.tenantConnections[request.headers["x-tenant"]]) {
      const logMessage = "Invalid Tenant";
      Logger.error(request, logMessage, false, "APP");
      return handleResponse(response, responseType.NOT_ACCEPTABLE, {
        data: {},
        customMessage: logMessage,
      });
    }
    Logger.info(
      request,
      `Connected to Tenant : ${request.headers["x-tenant"]}`,
      "APP"
    );
    request.knex = globalThis.tenantConnections[request.headers["x-tenant"]];
    return next();
  });
};

export default app;
export { app, options };
