import { userMutationType, userMutationResolver } from "./user/index.js";

export const mutationsTypes = [userMutationType];
export const mutationsResolvers = { ...userMutationResolver };
