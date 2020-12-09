import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Spinner, Alert } from 'react-bootstrap'

const AuthorList = ({ authorsQuery }) => {
    const { loading, error, data } = authorsQuery
    return (
        <>
            <Row>
                <Col>
                    <h2>Lista de Autores</h2>
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
                            {data?.authors.map(autor => {
                                return (
                                    <li key={autor.id}>
                                        {autor.name}
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
export default AuthorList

AuthorList.propTypes = {
    authorsQuery: PropTypes.object.isRequired
}