import fastify from "fastify";
import {
  fetchUser,
  loginCustomer,
  loginDeliveryPartner,
  refreshToken,
} from "../controller/auth/auth.js";
import { updateUser } from "../controller/tracking/user.js";
import { verifytoken } from "../middleware/auth.js";

//creating fastify routes

export const authRoutes = async (fastify, options) => {
  fastify.post("/customer/login", loginCustomer);
  fastify.post("/delivery/login", loginDeliveryPartner);
  fastify.post("/refresh-token", refreshToken);
  fastify.get("/user", { preHandler: [verifytoken] }, fetchUser);
  fastify.patch("/user", { prehandler: [verifytoken] }, updateUser);
};
