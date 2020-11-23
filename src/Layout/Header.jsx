import React from 'react'
import { Navbar } from 'react-bootstrap'
import { ReactComponent as HeaderIcon } from 'assets/img/header-icon.svg'
export default function Header() {
    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark" as="header">
                <Navbar.Brand href="#home">
                <HeaderIcon />
                    Todo
                </Navbar.Brand>
            </Navbar>
        </>
    )
}