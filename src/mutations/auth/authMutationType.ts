export const authMutationType = `#graphql
    input LoginInputType {
        email: String!
        password: String!
    }

    type Mutation {
        login(data: LoginInputType!): String
    }
`;
