import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./App.css";
import { CreateUser } from "./components/CreateUser";
import { ListOfUsers } from "./components/ListOfUsers";

function App() {
  const client = new ApolloClient({
    uri: "http://www.localhost:3001/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <>
      <ApolloProvider client={client}>
        <div className="App">
          <CreateUser />
          <ListOfUsers />
        </div>
        ;
      </ApolloProvider>
    </>
  );
}

export default App;
