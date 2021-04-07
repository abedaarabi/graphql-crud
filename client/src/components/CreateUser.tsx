import React, { useState, FC } from "react";
import { useMutation } from "@apollo/client";
import { CERATE_USER } from "../Graphql/mutation";

export const CreateUser: FC = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [addUser] = useMutation(CERATE_USER);

  return (
    <form>
      <div>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        onClick={(event) => {
          addUser({
            variables: {
              name: name,
              username: username,
              password: password,
            },
          });
        }}
      >
        Add user
      </button>
    </form>
  );
};
