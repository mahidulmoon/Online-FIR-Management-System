import React, { Component } from 'react';
import { Form,Col,Button,Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
class Registration extends Component {
    state = {
        register: {
            username:'',password:'',email:'',first_name: '', last_name: '',is_staff: false,
        },
        isadmin:'',
    }
    inputchange = e =>{
        const cred = this.state.register;
        cred[ e.target.name ] = e.target.value;
        this.setState({ register: cred });
    }
    checkboxinput = e =>{
        if(e.target.checked){
            this.state.register.is_staff = true;
        }else{
            this.state.register.is_staff = false;
        }
        //this.setState({register:{is_staff: e.target.checked}});
    }
    componentDidMount(){
        if(localStorage.getItem('admin')==='true'){
            this.setState({isadmin:'true'});
        }else{
            this.setState({isadmin:'false'});
        }
    }
    onsubmit = e =>{
        e.preventDefault();
        if(this.state.register.username ==='' || this.state.register.password ==='' || this.state.register.email ==='' || this.state.register.first_name ==='' || this.state.register.last_name ==='' ){
            alert("Please check your Inputs");
        }else{
            //console.log(this.state.register);
            axios.post('http://127.0.0.1:8000/register/registration/',this.state.register).then( response => alert("Registration Success!!!") ).catch(err => alert("Please check your input"))
        }
    }

    render() {
        if( this.state.isadmin === 'false' ){
            return <Redirect to='/login' />
        }
        return (
            <Container>
                <Form>
                    <Form.Row>
                        <Form.Group >
                            <Form.Label><img alt="policelogo" className="loginpiclogo" src="./login.png" /></Form.Label>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>UserName</Form.Label>
                                <Form.Control type="email" placeholder="User Name" name="username" value={this.state.register.username} onChange={this.inputchange} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" value={this.state.register.password} onChange={this.inputchange} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control placeholder="Email" name="email" value={this.state.register.email} onChange={this.inputchange} />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="First Name" name="first_name" value={this.state.register.first_name} onChange={this.inputchange} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last Name" name="last_name" value={this.state.register.last_name} onChange={this.inputchange} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Check aria-label="is_staff" onClick={this.checkboxinput} value={this.state.register.is_staff} />
                                <Form.Label>Staff User</Form.Label>
                            </Form.Row>

                            <Button variant="primary" type="submit" onClick={this.onsubmit}>
                                Submit
                            </Button>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Container>
        );
    }
}

export default Registration;