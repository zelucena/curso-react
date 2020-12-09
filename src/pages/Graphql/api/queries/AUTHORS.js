import { gql } from 'apollo-boost'

const AUTHORS = gql`
    query Authors {
        authors {
            id
            name
        }
    }
`

export default AUTHORS