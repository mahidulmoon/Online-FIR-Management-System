import React, { Component } from 'react';
import {Container,Button,Col,Form} from 'react-bootstrap';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
export default class Profile extends Component {
    state = {
        profile:[],
        user:[],
        islogin: '',
        edit: false,
        filefield: null
    }
    componentDidMount(){
        if(localStorage.getItem('firuserid')){
            this.setState({islogin: 'true'})
            axios.get(`http://127.0.0.1:8000/register/userprofile/${parseInt(localStorage.getItem('firuserid'))}/`).then(res => this.setState({profile: res.data})).catch(error => console.log('error'));
            axios.get(`http://127.0.0.1:8000/register/registration/${parseInt(localStorage.getItem("firuserid"))}/`).then( reponse => this.setState({ user:reponse.data }));
        }else{
            this.setState({islogin: 'false'})
        }

    }
    inputchange = e =>{
        e.preventDefault();
        const cred = this.state.profile;
        cred[ e.target.name ] = e.target.value;
        this.setState({profile: cred});
        //console.log(this.state.profile);
    }
    savebutton=(e)=>{
        alert("SuccessFully Updated");
        //axios.put(`http://127.0.0.1:8000/register/userprofile/${parseInt(localStorage.getItem('firuserid'))}/`,this.state.profile).then(res => alert("Profile Updated")).catch(error => console.log('error'));
    }
  render() {
    if(this.state.islogin === 'false'){
        return <Redirect to='/login' />
    }
    return (
        <Container>
                
            <React.Fragment>
                <div class="wrapper">
                        <div class="left">
                            <img src={this.state.profile.profile_img} alt="user" width="100" />
                            <h4>{this.state.user.username}</h4>
                            {this.state.user.is_staff && <p>Admin</p>}
                            {!this.state.user.is_staff && <p>Police</p>}
                        </div>
                        <div class="right">
                            <div class="info">
                                <h3>Profile</h3>
                                <div class="info_data">
                                    <div class="data">
                                        <h4>Name</h4>
                                        <p>{this.state.user.first_name} {this.state.user.last_name}</p>
                                    </div>
                                    
                                    <div class="data">
                                        <h4>Email</h4>
                                        <p>{this.state.user.email}</p>
                                    </div>
                                    <div class="data">
                                    <h4>Phone</h4>
                                        <p>{this.state.profile.contact}</p>
                                        {this.state.edit &&<Form.Control type="text" placeholder="Enter Phone Number" name="contact" onChange={this.inputchange} value={this.state.profile.contact}  />}
                                </div>
                                

                                </div>
                            </div>
                        
                        <div class="projects">
                                <h3>Contacts</h3>
                                <div class="projects_data">
                                    <div class="data">
                                        <h4>Address</h4>
                                        <p>{this.state.profile.address}</p>
                                        {this.state.edit &&<Form.Control type="text" placeholder="Enter Address" name="address" onChange={this.inputchange} value={this.state.profile.address}  />}
                                    </div>
                                    <div class="data">
                                    <h4>Thana</h4>
                                        <p>{this.state.profile.thana}</p>
                                        {this.state.edit &&<Form.Control type="text" placeholder="Enter Thana" name="thana" onChange={this.inputchange} value={this.state.profile.thana}  />}
                                </div>
                                </div>
                            </div>
                        
                            <div class="social_media">
                                <ul>
                                <Form.Row>
                                <li><Button as={Col} onClick={()=>this.setState({edit: !this.state.edit})} variant="primary">Update</Button></li> &nbsp;
                                {this.state.edit &&<li><Button as={Col} onClick={this.savebutton} variant="success">Save</Button></li>} &nbsp;
                                <li><Button as={Col} variant="danger">Change Password</Button></li> &nbsp;
                                </Form.Row>
                            </ul>
                        </div>
                        </div>
                    </div>
                
            </React.Fragment>
        </Container>
    );
  }
}
