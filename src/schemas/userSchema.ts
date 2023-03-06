export const userSchema = `#graphql
  type FavoritePokemon {
    name: String
  }

  type User {
    id: Int
    name: String
    email: String
    favorites: [FavoritePokemon!]
  }
`;
