const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require("graphql");

import { UserType } from "../TypeDefs/User";
import { MessageType } from "../TypeDefs/MessageType";
import { users } from "../../Entites/Users";
export const CreateUser = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { name, username, password } = args;
    await users.insert(args);
    return "User Added";
  },
};

export const DeleteUser = {
  type: MessageType,
  args: {
    id: { type: GraphQLInt },
  },
  async resolve(parent: any, args: any) {
    const { id } = args;
    await users.delete(id);
    return { isSuccessful: true, message: " User deleted" };
  },
};

export const UpdatePassword = {
  type: MessageType,
  args: {
    username: { type: GraphQLString },
    OldPassword: { type: GraphQLString },
    NewPassword: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { username, OldPassword, NewPassword } = args;
    const user = await users.findOne({ username: username });
    if (!user) return { isSuccessful: false, message: " can't find user" };

    const userPassword = user?.password;
    if (userPassword === OldPassword) {
      await users.update({ username: username }, { password: NewPassword });
      return { isSuccessful: true, message: " password changed" };
    } else {
      throw new Error("password do not match");
    }
  },
};
