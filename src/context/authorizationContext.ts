import { userQueryResolver } from "../queries/user/index.js";
import jwt from "jsonwebtoken";

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
  const decodedUser = jwt.decode(token);
  return decodedUser;
  //   const user = userQueryResolver.getUserById(decodedUser.id);
};
