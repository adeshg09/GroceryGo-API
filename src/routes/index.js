import fastify from "fastify";
import { authRoutes } from "./auth";
import { categoryRoutes, productRoutes } from "./products";
import { orderRoutes } from "./order";

const prefix = "/api";

export const registerRoutes = async (fastify) => {
  fastify.register(authRoutes, { prefix: prefix });
  fastify.register(productRoutes, { prefix: prefix });
  fastify.register(categoryRoutes, { prefix: prefix });
  fastify.register(orderRoutes, { prefix: prefix });
};
