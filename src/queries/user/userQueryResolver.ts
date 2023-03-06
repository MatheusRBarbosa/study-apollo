import { UserRepository } from "../../repositories/index.js";

const userRepository = new UserRepository();

/**
 *
 */
const getUsers = () => {
  return userRepository.findMany();
};

/**
 *
 */
const getUserById = (_: any, { id }: any, context: any) => {
  console.log(context.user);
  return userRepository.findUniqueBy({ id });
};

export const userQueryResolver = {
  getUsers,
  getUserById,
};
