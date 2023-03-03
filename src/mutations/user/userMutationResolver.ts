import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 *
 */
const addUser = (_: any, { data }: any) => {
  return prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
    },
  });
};

export const userMutationResolver = {
  addUser,
};
