import { FavoritePokemon } from "@prisma/client";
import { BaseRepository } from "./baseRepository.js";

export class FavoriteRepository extends BaseRepository<FavoritePokemon> {
  /**
   *
   */
  addFavorite = (userId: number, name: string) => {
    return this.prisma.favoritePokemon.create({
      data: {
        userId,
        name,
      },
    });
  };
}
