import React, { Component } from 'react';
import { Form,Container,Button } from 'react-bootstrap';
class Login extends Component {
    state = {
        login:{
            username:'',password:''
        },
    }
    inputchange = e =>{
        const cred = this.state.login;
        cred[ e.target.name ] = e.target.value;
        this.setState({ login: cred });
    }
    login = e =>{
        e.preventDefault();
        if(this.state.login.username ==='' || this.state.login.password ===''){
            alert("Input valid username and password");
        }else{
            console.log(this.state.login);
        }
    }
    render() {
        return (
            <Container>
                <Form>
                    <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="username" placeholder="Enter email" value={this.state.login.username} onChange={this.inputchange} />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" value={this.state.login.password} onChange={this.inputchange} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.login} >
                        Submit
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default Login;