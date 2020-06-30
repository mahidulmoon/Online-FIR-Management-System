import React, { Component } from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import axios from 'axios';
class Navigation extends Component {
    state ={
        islogin: false,
        username: '',
    }
    componentDidMount(){
        if(localStorage.getItem("firtoken")){
            this.setState({ islogin:true });
            axios.get(`http://127.0.0.1:8000/register/registration/${parseInt(localStorage.getItem("firuserid"))}/`).then( reponse => this.setState({ username:reponse.data.username }));
        }
    }
    logout(){
        localStorage.removeItem("firtoken");
        localStorage.removeItem("firuserid");
        window.location.reload(false);
    }
    render() {
        return (
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="">Online FIR</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/registerfir">Register FIR</Nav.Link>
                    <Nav.Link href="/firlist">Pending FIR List</Nav.Link>
                    <Nav.Link href="/waitforcharge">Create ChargeSheet</Nav.Link>
                    {this.state.islogin && <Nav.Link href="/register">Registration</Nav.Link> }                   
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    Signed in as: <a href="/">{this.state.username}</a>
                    </Navbar.Text>
                    {this.state.islogin === false && <Nav.Link href="/login">LogIN</Nav.Link>}
                    {this.state.islogin && <Nav.Link onClick={this.logout}>LogOut</Nav.Link>} 
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;