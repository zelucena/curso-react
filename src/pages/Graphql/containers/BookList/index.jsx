import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Spinner, Alert } from 'react-bootstrap'

const BookList = ({ bookQuery }) => {
    const { loading, error, data } = bookQuery
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

BookList.propTypes = {
    bookQuery: PropTypes.object.isRequired
}