import { registerUser } from "@/modules/users/use-cases/register";
import { FastifyInstance } from "fastify";

export const usersRouter = (app: FastifyInstance) => {
  app.post("/", registerUser);
};
