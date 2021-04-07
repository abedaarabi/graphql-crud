import React, { FC } from "react";
import { GET_ALL_USERS } from "../Graphql/queries";
import { DELETE_USERS } from "../Graphql/mutation";
import { useQuery, useMutation } from "@apollo/client";

export const ListOfUsers: FC = () => {
  const { data, loading } = useQuery(GET_ALL_USERS);
  const [deleteuser, { error }] = useMutation(DELETE_USERS);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error ...</p>;
  return (
    <div>
      {data &&
        data.getAllUser.map((user: any) => {
          return (
            <div key={user.id}>
              <div>{user.name}</div>
              <span>
                <button
                  onClick={() => {
                    deleteuser({ variables: { id: user.id } });
                  }}
                >
                  Delete User
                </button>
              </span>
            </div>
          );
        })}
    </div>
  );
};
