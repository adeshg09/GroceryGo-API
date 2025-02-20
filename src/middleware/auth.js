import { JsonWebTokenError } from "jsonwebtoken";

export const verifyToken = async (req, reply) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return reply.status(401).send({ message: "Access token required." });
    }
    const token = authHeader.split(" ")[1];
    const decoded = JsonWebTokenError.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET
    );
    req.user = decoded;
    return true;
  } catch (error) {
    return reply
      .staus(403)
      .send({ message: "Invalid or expired token", error });
  }
};
