import { app } from "./fastify";

export const queryDb = async (query: string, params?: any[]) => {
  const client = await app.pg.connect();
  try {
    const { rows } = await client.query(query, params);
    return rows;
  } finally {
    client.release();
  }
};
