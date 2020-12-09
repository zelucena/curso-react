import { gql } from 'apollo-boost'

const ADICIONAR_LIVRO = gql`
    mutation AdicionarLivro($title: String!, $authorsId: [ID!]!) {
        addBook(title: $title, authorsId: $authorsId){
            id
        }
    }
`

export default ADICIONAR_LIVRO