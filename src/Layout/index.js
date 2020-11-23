import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import Header from './Header';
import Footer from './Footer';
export default function Layout ({children}) {
    return (
        <>
            <Header />
            <Container as="main">
                {children}
            </Container>
            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}