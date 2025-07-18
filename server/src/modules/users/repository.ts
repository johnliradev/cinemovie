import { User } from "@/types";

import { createUserData } from "./dto";
import { queryDb } from "@/lib/db";
export const usersRepository = {
  create: async (data: createUserData): Promise<User> => {
    const rows = await queryDb(
      "INSERT INTO users (name, email, hash_password) VALUES ($1, $2, $3) RETURNING *",
      [data.name, data.email, data.hashPassword]
    );
    const user = rows[0];
    return user;
  },
  getByEmail: async (email: string): Promise<User | undefined> => {
    const rows = await queryDb('SELECT id, name, email, hash_password as "hashPassword" FROM users WHERE email = $1', [email]);
    return rows[0];
  },
};
