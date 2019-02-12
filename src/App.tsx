import ApolloClient from "apollo-boost";
import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { client } from "./apollo";
import Routes from "./routes";

interface Props {}

export default class App extends Component<Props> {
  public render() {
    return (
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    );
  }
}
