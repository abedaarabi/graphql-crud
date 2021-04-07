const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require("graphql");

import { users } from "../../Entites/Users";

import { UserType } from "../TypeDefs/User";
export const GetAllUers = {
  type: new GraphQLList(UserType),
  resolve() {
    return users.find();
  },
};
