import React from 'react'
import { useQuery } from "react-apollo"
import { Row, Col, Spinner, Alert } from 'react-bootstrap'
import * as queries from 'pages/Graphql/api/queries'

const BookList = () => {
    const { loading, error, data } = useQuery(queries.BOOKS)
    return (
        <>
            <Row>
                <Col>
                    <h2>BookList</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    {loading && (
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Carregando...</span>
                        </Spinner>
                    )}
                    {!loading && error && (
                        <Alert variant="danger">{error.message}</Alert>
                    )}
                    {!loading && data && (
                        <ul>
                            {data?.books.map(book => {
                                const authors = book.authors.map(author => author.name).join(',')
                                return (
                                    <li key={book.id}>
                                        {book.title} ({authors})
                                    </li>
                                )
                            })}
                        </ul>
                    )}
                </Col>
            </Row>
        </>
    )
}
export default BookList