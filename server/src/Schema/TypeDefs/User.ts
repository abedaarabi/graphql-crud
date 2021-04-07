const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require("graphql");

export const UserType = new GraphQLObjectType({
  name: "User",

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});
