import { User } from "../../../../models";
import { Logger, handleResponse, responseType } from "../../../../helpers";
import { FastifyPluginAsync } from "fastify";
// import { schema } from "./schema";

const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/", async function (request: any, reply) {
    try {
      Logger.info(request, "Getting User Data.....", `EXAMPLE`);

      reply.send();
      return handleResponse(reply, responseType.OK, {
        data: await User.query(request.knex).limit(10),
      });
    } catch (error: any) {
      Logger.error(request, error.message, error, "EXAMPLE");
    }
  });
};

export default example;
