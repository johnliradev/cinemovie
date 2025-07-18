import z, { email } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(2, "Username must have 2 letters."),
  email: z.email(),
  password: z.string().min(6, "Password must have at least 6 characters."),
});
export const loginSchema = z.object({
  email: z.email("Invalid email address."),
  password: z.string().min(6, "Password must have at least 6 characters."),
});

export type loginData = z.infer<typeof loginSchema>;
export type createUserData = {
  name: string;
  email: string;
  hashPassword: string;
}
