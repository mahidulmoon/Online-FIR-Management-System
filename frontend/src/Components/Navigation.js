import React, { Component } from 'react';
import { Navbar,Nav } from 'react-bootstrap';
class Navigation extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="">Online FIR</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/registerfir">Register FIR</Nav.Link>
                    <Nav.Link href="/firlist">Pending FIR List</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                    <Nav.Link href="/login">LogIN</Nav.Link>
                    <Nav.Link href="/waitforcharge">Create ChargeSheet</Nav.Link>
                    
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    Signed in as: <a href="/">Mahidul Moon</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;