import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 *
 */
const getUsers = () => {
  return prisma.user.findMany();
};

/**
 *
 */
const getUserById = (_: any, { id }: any) => {
  return prisma.user.findUnique({
    where: { id },
  });
};

export const userQueryResolver = {
  getUsers,
  getUserById,
};
