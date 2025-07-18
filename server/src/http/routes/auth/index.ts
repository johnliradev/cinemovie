import { login } from "@/modules/users/use-cases/login";
import { registerUser } from "@/modules/users/use-cases/register";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export const authRouter = (app: FastifyInstance) => {
  app.post("/register", registerUser);
  app.post('/login', login)
};
