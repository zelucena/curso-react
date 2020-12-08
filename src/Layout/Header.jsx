import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { ReactComponent as HeaderIcon } from 'assets/img/header-icon.svg'
import { useHistory } from 'react-router-dom'

export default function Header() {
    const history = useHistory()
    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark" as="header">
                <Navbar.Brand href="#home">
                <HeaderIcon />
                    Todo
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => history.push('/')}>TODOs</Nav.Link>
                    <Nav.Link onClick={() => history.push('/graphql')}>Graphql</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}