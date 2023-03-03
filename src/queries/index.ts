import { userQueryType, userQueryResolver } from "./user/index.js";

export const queriesTypes = [userQueryType];
export const queriesResolvers = { ...userQueryResolver };
