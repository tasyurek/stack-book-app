const graphql = require("graphql");
const _ = require("lodash");

let books = [
  { name: "Kuyucaki Yusuf", genre: "Roman", id: 1 },
  { name: "Yuzbasinin Kizi", genre: "Romantic", id: 2 },
  { name: "Patasana", genre: "Roman", id: 3 }
];

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
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
