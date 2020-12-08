import React from 'react'
import { ApolloProvider } from 'react-apollo'
import client from './api/client'
import GraphqlApp from './GraphQLApp'

const Graphql = () => {
    return (
        <ApolloProvider client={client}>
            <GraphqlApp />
        </ApolloProvider>
    );
}

export default Graphql;