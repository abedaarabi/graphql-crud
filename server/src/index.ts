import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { createConnection } from "typeorm";
import { schema } from "./Schema/index";
import { users } from "./Entites/Users";
const main = async () => {
  await createConnection({
    type: "mysql",
    username: "root",
    password: "password",
    database: "GraphqlCRUD",

    logging: true,
    synchronize: false,
    entities: [users],
  });
  const app = express();
  app.use(cors());
  app.use(express.json()); //parse http as json

  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.listen(3001, () => {
    console.log("server is running on port 3001");
  });
};
main().catch((error) => console.log(error));
