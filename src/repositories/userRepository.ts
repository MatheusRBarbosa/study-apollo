import { PrismaClient } from "@prisma/client";

export class UserRepository {
  prisma = new PrismaClient();

  /**
   *
   */
  findUniqueBy = async (key: object, includePassword = false) => {
    const user = await this.prisma.user.findUnique({
      where: key,
    });

    if (!includePassword) {
      this.exclude(user, ["password"]);
    }

    return user;
  };

  /**
   *
   */
  findMany = async () => {
    const users = await this.prisma.user.findMany();
    for (let user of users) {
      this.exclude(user, ["password"]);
    }

    return users;
  };

  /**
   *
   */
  create = (user: any) => {
    return this.prisma.user.create({
      data: {
        ...user,
      },
    });
  };

  /**
   *
   */
  private exclude = <User, Key extends keyof User>(user: User, keys: Key[]) => {
    for (let key of keys) {
      delete user[key];
    }
    return user;
  };
}
