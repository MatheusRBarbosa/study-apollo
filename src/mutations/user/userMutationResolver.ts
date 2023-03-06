import bcrypt from "bcrypt";
import { UserRepository } from "../../repositories/index.js";

const userRepository = new UserRepository();

/**
 *
 */
const addUser = (parent: any, { data }: any) => {
  const user = {
    name: data.name,
    email: data.email,
    password: bcrypt.hashSync(data.password, 10),
  };

  return userRepository.create(user);
};

export const userMutationResolver = {
  addUser,
};
