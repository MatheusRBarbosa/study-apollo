export const userMutationType = `#graphql
    input AddUserInputType {
        name: String
        email: String
        password: String
    }

    type Mutation {
        addUser(data: AddUserInputType!): User
    }
`;
