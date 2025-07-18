import cors from "@fastify/cors";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";
import { FastifyInstance } from "fastify";
import { Router } from "@/http/routes/index";
import postgres from "@fastify/postgres";
import jwt from "@fastify/jwt";

export const registerPlugins = (app: FastifyInstance) => {
  app.register(cors, { origin: "*" });
  app.register(swagger, {
    swagger: {
      info: {
        title: "API Documentation",
        description: "API documentation",
        version: "1.0.0",
      },
      host: "localhost:3000",
      schemes: ["http"],
      consumes: ["application/json"],
      produces: ["application/json"],
    },
  });
  app.register(swaggerUi, {
    routePrefix: "/api/docs",
    uiConfig: {
      deepLinking: false,
    },
    staticCSP: true,
    transformSpecification: (swaggerObject, request, reply) => {
      return swaggerObject;
    },
    transformSpecificationClone: true,
  });
  app.register(postgres, {
    connectionString:
      process.env.DATABASE_URL || "postgresql://docker:docker@db:5432/movie_db",
  });
  app.register(jwt, {
    // Add your secret in .env file
    secret: "supersecret",
    sign: { expiresIn: "1d" },
  });
  app.register(Router, { prefix: "/api" });
};
