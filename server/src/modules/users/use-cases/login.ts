import { FastifyReply, FastifyRequest } from "fastify";
import { usersRepository } from "../repository";
import { createAppError } from "@/http/errors/appError";
import bcrypt from "bcryptjs";
import { loginSchema } from "../dto";
import z from "zod";
import { app } from "@/lib/fastify";

export const login = async (request: FastifyRequest, reply: FastifyReply) => {
  const parsedData = loginSchema.safeParse(request.body);
  if (parsedData.error) {
    return reply.status(400).send({
      message: "Validation Error",
      data: z.treeifyError(parsedData.error),
    });
  }
  const user = await usersRepository.getByEmail(parsedData.data.email);
  if (!user) {
    throw createAppError("Invalid Credentials", 400);
  }
  const verifyPassword = await bcrypt.compare(
    parsedData.data.password,
    user.hashPassword
  );
  if (!verifyPassword) {
    throw createAppError("Invalid Credentials", 400);
  }
  const token = app.jwt.sign({
    userId: user.id,
    email: user.email,
  });
  reply.send({
    message: "Login successful",
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  });
};
