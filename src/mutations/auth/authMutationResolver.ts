import { UserRepository } from "../../repositories/index.js";
import bcrypt from "bcrypt";
import { GraphQLError } from "graphql";
import jwt from "jsonwebtoken";

const userRepository = new UserRepository();

/**
 *
 */
const login = async (_, { data }: any) => {
  const user = await userRepository.findUniqueBy({ email: data.email }, true);

  if (!user || !bcrypt.compareSync(data.password, user.password)) {
    throw new GraphQLError("Invalid credentials", {
      extensions: {
        statusCode: 401,
      },
    });
  }

  delete user["password"];
  const token = jwt.sign(user, process.env.JWT_SECRET);
  return token;
};

export const authMutationResolver = {
  login,
};
