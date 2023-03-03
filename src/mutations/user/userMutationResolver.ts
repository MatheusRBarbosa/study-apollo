import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

/**
 *
 */
const addUser = (_: any, { data }: any) => {
  return prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: bcrypt.hashSync(data.password, 10),
    },
  });
};

export const userMutationResolver = {
  addUser,
};
