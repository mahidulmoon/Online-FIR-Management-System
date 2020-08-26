import React, { Component } from 'react';
import { Form,Container,Button,Col } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
class Login extends Component {
    state = {
        login:{
            username:'',password:''
        },
        token: [],
        isadmin: 'notadmin',
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
            localStorage.setItem('firuserid',this.state.token.id);alert("Login Successfull!!!");
            
            axios.get(`http://127.0.0.1:8000/register/getregisterinfo/${parseInt(this.state.token.id)}/`).then( res => {
                if( res.data.is_staff){
                    localStorage.setItem('admin','true');
                    this.setState({ isadmin: 'admin' });
                }else{
                    localStorage.setItem('admin','false');
                    this.setState({ isadmin: 'normaluser' });
                }
            });
        }).catch( err => alert("Invalid Username and Password"))
        }
    }
    render() {
        if (this.state.isadmin === 'admin'){
            return <Redirect to='/admindashboard' />
        }
        else if(this.state.isadmin === 'normaluser'){
            return <Redirect to='/firlist' />
        }
        return (
            <Container>
                <Form>
                    <Form.Row>
                    <Form.Group>
                        <Form.Label><img alt="policelogo" className="loginpiclogo" src="./kisspng-indonesian-national-police-promoter-police-officer-5b08c6618354b5.5194515315273017295379.png" /></Form.Label>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Group controlId="formGroupEmail">
                        <Form.Label>Username</Form.Label>
                            <Form.Control type="email" name="username" placeholder="Enter email" value={this.state.login.username} onChange={this.inputchange} />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" value={this.state.login.password} onChange={this.inputchange} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={this.login} >
                            Submit
                        </Button>
                    </Form.Group>
                    </Form.Row>
                </Form>
            </Container>
        );
    }
}

export default Login;