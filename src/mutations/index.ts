import { userMutationType, userMutationResolver } from "./user/index.js";
import { authMutationType, authMutationResolver } from "./auth/index.js";

export const mutationsTypes = [userMutationType, authMutationType];

export const mutationsResolvers = {
  ...userMutationResolver,
  ...authMutationResolver,
};
