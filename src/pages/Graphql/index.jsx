import React from 'react'
import { ApolloProvider } from 'react-apollo'
import GraphqlApp from './GraphQLApp'
import { useAPI, APIProvider } from './api/APIContext'

const Graphql = () => {
    const { client } = useAPI()
    return (
        <APIProvider>
            <ApolloProvider client={client}>
                <GraphqlApp />
            </ApolloProvider>
        </APIProvider>
    );
}

export default Graphql;