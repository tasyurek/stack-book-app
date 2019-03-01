import React, { Component } from "react";
import BookList from "./components/BookList";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

class App extends Component {
  render() {
    const client = new ApolloClient({
      uri: "http://localhost:4000/graphql"
    });
    return (
      <ApolloProvider client={client}>
        <div className="App">
          Book List
          <BookList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
