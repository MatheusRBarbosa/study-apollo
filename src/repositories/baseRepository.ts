import { PrismaClient } from "@prisma/client";

export abstract class BaseRepository<T> {
  protected prisma = new PrismaClient();

  /**
   *
   */
  protected exclude = <T, Key extends keyof T>(entity: T, keys: Key[]) => {
    for (let key of keys) {
      delete entity[key];
    }
    return entity;
  };
}
