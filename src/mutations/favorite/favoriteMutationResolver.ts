import { UnauthenticatedException } from "../../exceptions/index.js";
import { FavoriteRepository } from "../../repositories/index.js";

const favoriteRepository = new FavoriteRepository();

/**
 *
 */
const addFavorite = async (parent: any, { pokemonName }, context: any) => {
  if (!context.authUser) throw UnauthenticatedException;

  await favoriteRepository.addFavorite(context.authUser.id, pokemonName);
  return pokemonName;
};

export const favoriteMutationResolver = {
  addFavorite,
};
