import { gql } from 'apollo-boost'

const ADICIONAR_AUTOR = gql`
    mutation AdicionarAutor($name: String!) {
        addAuthor(name:$name){
            id
        }
    }
`

export default ADICIONAR_AUTOR