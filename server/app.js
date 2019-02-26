const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");

const app = express();

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
