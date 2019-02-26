const graphql = require("graphql");
const _ = require("lodash");

let books = [
  { name: "Kuyucakii Yusuf", genre: "Roman", id: "1" },
  { name: "Yuzbasinin Kizi", genre: "Romantic", id: "2" },
  { name: "Patasana", genre: "Roman", id: "3" }
];

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } = graphql;

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from Database.
        return _.find(books, { id: args.id });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
