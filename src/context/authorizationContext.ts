import jwt from "jsonwebtoken";
import { UserRepository } from "../repositories/index.js";

const userRepository = new UserRepository();

/**
 *
 */
export const getUserFromToken = (req: any) => {
  const authToken: string = req.headers.authorization || "";
  const results = authToken.split(" ");

  if (results.length < 2) {
    return null;
  }

  const schema = results[0];
  if (schema.toLowerCase() !== "bearer") {
    return null;
  }

  const token = results[1];
  const decodedUser: any = jwt.decode(token);
  return userRepository.findUniqueBy({ id: decodedUser.id });
};
