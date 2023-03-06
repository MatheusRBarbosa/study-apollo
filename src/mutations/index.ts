import { userMutationType, userMutationResolver } from "./user/index.js";
import { authMutationType, authMutationResolver } from "./auth/index.js";
import {
  favoriteMutationType,
  favoriteMutationResolver,
} from "./favorite/index.js";

export const mutationsTypes = [
  userMutationType,
  authMutationType,
  favoriteMutationType,
];

export const mutationsResolvers = {
  ...userMutationResolver,
  ...authMutationResolver,
  ...favoriteMutationResolver,
};
