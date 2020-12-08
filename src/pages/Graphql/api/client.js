import ApolloClient from 'apollo-boost'

//Graphql requires a single endpoint
const client = new ApolloClient({
    uri: process.env.REACT_APP_APOLLO_ENDPOINT
})

export default client

