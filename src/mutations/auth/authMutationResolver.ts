import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { GraphQLError } from "graphql";

const prisma = new PrismaClient();

/**
 *
 */
const login = async (_, { data }: any) => {
  const user = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (!user || !bcrypt.compareSync(data.password, user.password)) {
    throw new GraphQLError("Invalid credentials", {
      extensions: {
        statusCode: 401,
      },
    });
  }

  return "token from user";
};

export const authMutationResolver = {
  login,
};
