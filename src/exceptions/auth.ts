import { GraphQLError } from "graphql";

export const InvalidCredentialsException = new GraphQLError(
  "Invalid credentials",
  {
    extensions: {
      code: "INVALID_CREDENTAILS",
      http: { status: 401 },
    },
  }
);

export const UnauthenticatedException = new GraphQLError(
  "User is not authenticated",
  {
    extensions: {
      code: "UNAUTHENTICATED",
      http: { status: 401 },
    },
  }
);
