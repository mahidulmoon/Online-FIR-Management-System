import React, { Component } from 'react';
import { Form,Container,Button } from 'react-bootstrap';
import axios from 'axios';
class Login extends Component {
    state = {
        login:{
            username:'',password:''
        },
        token: []
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
            //console.log(this.state.login);
            axios.post('http://127.0.0.1:8000/register/authenticate/',this.state.login).then(response => {this.setState({ token: response.data }); 
            localStorage.setItem('firtoken', this.state.token.token);
            localStorage.setItem('firuserid',this.state.token.id);alert("Login Successfull!!!");window.location.reload(false);}).catch( err => alert("Pleace check your Input"))
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