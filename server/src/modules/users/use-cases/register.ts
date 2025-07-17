import { FastifyReply, FastifyRequest } from "fastify";
import { createUserSchema } from "../dto";
import { createAppError } from "@/http/errors/appError";
import bcrypt from "bcryptjs";
import { usersRepository } from "../repository";
import z from "zod";

export const registerUser = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const parsedData = createUserSchema.safeParse(request.body);
  if (parsedData.error) {
    return reply.status(400).send({
      message: "Validation Error",
      data: z.treeifyError(parsedData.error),
    });
  }
  const existingUser = await usersRepository.getByEmail(parsedData.data.email);
  if (existingUser) {
    throw createAppError("E-mail already exists.", 409);
  }

  const saltRounds = 10;
  const hashPassword = await bcrypt.hash(parsedData.data.password, saltRounds);
  const userData = {
    name: parsedData.data.name,
    email: parsedData.data.email,
    hashPassword,
  };

  const user = await usersRepository.create(userData);
  reply.status(201).send({
    message: "User successfully created.",
    user: { id: user.id, name: user.name, email: user.email },
  });
};
