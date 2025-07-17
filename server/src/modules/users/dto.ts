import z from "zod";

export const createUserSchema = z.object({
  name: z.string().min(2, "Username must have 2 letters."),
  email: z.email(),
  password: z.string().min(6, "Password must have at least 6 characters."),
});

export interface createUserData {
  name: string;
  email: string;
  hashPassword: string;
}
