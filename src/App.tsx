import React from "react";
import { ApolloProvider } from "react-apollo";
import Client from "./apollo";
import Routes from "./routes";

export default class App extends React.PureComponent {
  public render() {
    return (
      <ApolloProvider client={Client}>
        <Routes />
      </ApolloProvider>
    );
  }
}
