import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { usersRouter } from "./users";

export const Router = (app: FastifyInstance) => {
  app.register(usersRouter, { prefix: "/users" });

  app.get("/ping", (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ res: "pong" });
  });
  app.get("/test-error", (request: FastifyRequest, reply: FastifyReply) => {
    const { createAppError } = require("../errors/appError");
    throw createAppError("Unauthorized", 401);
  });
};
