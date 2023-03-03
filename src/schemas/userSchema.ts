export const userSchema = `#graphql
  type User {
    id: Int
    name: String
    email: String
    favorites: [String!]
  }
`;
