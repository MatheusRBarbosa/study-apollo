import { UnauthenticatedException } from "../../exceptions/auth.js";
import { UserRepository } from "../../repositories/index.js";

const userRepository = new UserRepository();

/**
 *
 */
const getUsers = (parent: any, args: any, context: any) => {
  if (!context.authUser) throw UnauthenticatedException;
  return userRepository.findMany();
};

/**
 *
 */
const getUserById = (parent: any, { id }: any, context: any) => {
  if (!context.authUser) throw UnauthenticatedException;

  return userRepository.findUniqueBy({ id });
};

export const userQueryResolver = {
  getUsers,
  getUserById,
};
