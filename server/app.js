const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://broku:Onur60214@gql-broku-kwqjl.mongodb.net/stack-book-db?retryWrites=true"
);
mongoose.connection.once("open", () => {
  console.log("connected to database...");
});

app.use(
  "/graphql",
  graphqlHTTP({
    // pass a schema
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("Listening port: 4000");
});
