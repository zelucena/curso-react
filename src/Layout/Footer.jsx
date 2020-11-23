import React from 'react'
import { Navbar } from 'react-bootstrap'
import { ReactComponent as Linkedin } from 'assets/img/linkedin-icon.svg'
import { ReactComponent as Github } from 'assets/img/github-icon.svg'
export default function Footer() {
    return (
        <Navbar as="footer" fixed="bottom" bg="dark" variant="dark">
            <address>
                <a href="https://google.com.br" target="blank">
                    <Linkedin height="30px" width="30px" />
                </a>
                <a href="https://google.com.br" target="blank">
                    <Github height="30px" width="30px" />
                </a>
            </address>
        </Navbar>
    )
}