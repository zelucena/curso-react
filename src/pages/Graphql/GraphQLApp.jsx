import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { BookList } from './containers'

const GraphqlApp = () => {
    return (
        <>
            <Row>
                <Col>
                    <h1>Graphql</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <BookList />
                </Col>
            </Row>
        </>
    )
}

export default GraphqlApp