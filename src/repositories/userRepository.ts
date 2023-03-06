import { User } from "@prisma/client";
import { BaseRepository } from "./baseRepository.js";

export class UserRepository extends BaseRepository<User> {
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
}
