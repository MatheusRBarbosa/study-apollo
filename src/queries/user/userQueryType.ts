export const userQueryType = `#graphql
    type Query {
        getUsers: [User]
        getUserById(id: Int): User
        getAuthedUser: User
    }
`;
