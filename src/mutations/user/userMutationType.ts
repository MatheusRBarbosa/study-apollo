export const userMutationType = `#graphql
    input AddFavoriteInputType {
        userId: Int
        pokemonName: String
    }

    input AddUserInputType {
        name: String
        email: String
        password: String
    }

    type Mutation {
        addUser(data: AddUserInputType!): User
    }
`;
