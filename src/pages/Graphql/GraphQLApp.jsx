import React, { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { useQuery } from "react-apollo"
import { useAPIContext } from 'pages/Graphql/api/APIContext'
import { BookList, AuthorList, CadastroAutor, CadastroLivro } from './containers'

const GraphqlApp = () => {
    const { queries } = useAPIContext()
    const bookQuery = useQuery(queries.BOOKS)
    const authorsQuery = useQuery(queries.AUTHORS)
    const [showCadastroAutor, setShowCadastroAutor] = useState(false)
    const [showCadastroLivro, setShowCadastroLivro] = useState(false)

    return (
        <>
            <CadastroAutor
                show={showCadastroAutor}
                handleClose={() => {
                    setShowCadastroAutor(false)
                }}
            />
            <CadastroLivro
                authorsQuery={authorsQuery}
                show={showCadastroLivro}
                handleClose={() => {
                    setShowCadastroLivro(false)
                }}
            />
            <Row className="align-items-center">
                <Col>
                    <h1>Graphql</h1>
                </Col>
                <Col>
                    <Button variant="primary" onClick={() => setShowCadastroLivro(true)}>
                        Cadastrar livro
                    </Button>
                </Col>
                <Col>
                    <Button variant="primary" onClick={() => setShowCadastroAutor(true)}>
                        Cadastrar autor
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <BookList bookQuery={bookQuery} authorsQuery={authorsQuery}/>
                </Col>
                <Col>
                    <AuthorList authorsQuery={authorsQuery}/>
                </Col>
            </Row>
        </>
    )
}

export default GraphqlApp