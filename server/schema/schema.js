const graphql = require("graphql");
const _ = require("lodash");
const book = require("../models/book");
const author = require("../models/author");

let books = [
  { id: "1", name: "Patasana", genre: "Roman", authorId: "2" },
  { id: "2", name: "Sefiller", genre: "Roman", authorId: "3" },
  { id: "3", name: "Sirca Kosk", genre: "Story", authorId: "4" },
  { id: "4", name: "Yuzbasinin Kizi", genre: "Roman", authorId: "5" },
  { id: "5", name: "Kuyucakii Yusuf", genre: "Roman", authorId: "4" },
  { id: "6", name: "Insan Ne Ile Yasar?", genre: "Roman", authorId: "1" },
  { id: "7", name: "Kurk Mantolu Madonna", genre: "Roman", authorId: "4" }
];

let authors = [
  { id: "1", name: "Tolstoy" },
  { id: "2", name: "Ahmet Umit" },
  { id: "3", name: "Victor Hugo" },
  { id: "4", name: "Sebahattin Ali" },
  { id: "5", name: "Alexsandr Sergeyevic Puskin" }
];

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList
} = graphql;

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        //return _.find(authors, { id: parent.authorId });
      }
    }
  })
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        //return _.filter(books, { authorId: parent.id });
      }
    }
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
        //return _.find(books, { id: args.id });
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //return _.find(authors, { id: args.id });
      }
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        //return books;
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, argas) {
        //return authors;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
