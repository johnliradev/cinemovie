import { createUser } from "@/modules/users/use-cases/create-user";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export const usersRouter = (app: FastifyInstance) => {
  app.post("/", createUser);
};
