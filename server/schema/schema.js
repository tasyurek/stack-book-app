const graphql = require("graphql");
const _ = require("lodash");

let books = [
  { id: "1", name: "Kuyucakii Yusuf", genre: "Roman" },
  { id: "2", name: "Yuzbasinin Kizi", genre: "Romantic" },
  { id: "3", name: "Patasana", genre: "Roman" }
];

let authors = [
  { id: "1", name: "Sebahattin Ali" },
  { id: "2", name: "Alexsandr Sergeyevic Puskin" },
  { id: "3", name: "Ahmet Umit" }
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

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString }
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
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(authors, { id: args.id });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
