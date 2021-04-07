const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require("graphql");
import { GetAllUers } from "./Queries/User";
import { CreateUser, DeleteUser, UpdatePassword } from "./Mutations/User";
const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUser: GetAllUers,
  },
});
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createuser: CreateUser,
    deleteUser: DeleteUser,
    updatePassword: UpdatePassword,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
