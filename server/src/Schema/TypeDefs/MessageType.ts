import { GraphQLBoolean } from "graphql";

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require("graphql");

export const MessageType = new GraphQLObjectType({
  name: "Message",

  fields: () => ({
    isSuccessful: { type: GraphQLBoolean },
    message: { type: GraphQLString },
  }),
});
