import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { InvalidCredentialsException } from "../../exceptions/index.js";
import { UserRepository } from "../../repositories/index.js";

const userRepository = new UserRepository();

/**
 *
 */
const login = async (_, { data }: any) => {
  const user = await userRepository.findUniqueBy({ email: data.email }, true);

  if (!user || !bcrypt.compareSync(data.password, user.password)) {
    throw InvalidCredentialsException;
  }

  delete user["password"];
  const token = jwt.sign(user, process.env.JWT_SECRET);
  return token;
};

export const authMutationResolver = {
  login,
};
