export const userMutationType = `#graphql
    input AddFavoriteInputType {
        userId: Int
        pokemonName: String
    }

    input AddUserInputType {
        name: String
        email: String
    }

    type Mutation {
        addUser(data: AddUserInputType!): User
    }
`;
