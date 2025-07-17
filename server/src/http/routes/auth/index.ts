import { registerUser } from "@/modules/users/use-cases/register";
import { FastifyInstance } from "fastify";

export const authRouter = (app: FastifyInstance) => {
  app.post("/register", registerUser);
};
