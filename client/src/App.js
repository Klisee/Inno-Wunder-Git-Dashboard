import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Header from './components/Header'
import Router from './components/Router'
import StyledContainer from './components/Style/Container'
import './App.css'

// GraphQL endpoint
const client = new ApolloClient({
  uri: "http://localhost:4000/",
});


class App extends Component { 
  render() {
    return (  
      <StyledContainer>
        <ApolloProvider client={client}>
          <Header/>
          <Router/>
        </ApolloProvider>
      </StyledContainer>
    );  
  }
}

export default App