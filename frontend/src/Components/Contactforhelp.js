import React, { Component } from 'react';
import axios from 'axios';
import { Table,Container,Form,Col,Button } from 'react-bootstrap';
class Contactforhelp extends Component {
    state={
        contact:[],
        postcontact:{
            thananame:'',contact:'',location:''
        },
        islogin: false,
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/thana/contact/').then( res => this.setState({ contact: res.data }) );
        if(localStorage.getItem('firtoken')){
            this.setState({ islogin: true });
        }
    }
    inputchange = e =>{
        const cred = this.state.postcontact;
        cred[ e.target.name ] = e.target.value;
        this.setState({ postcontact:cred });

    }
    submitbutton=(e)=>{
        //e.preventDefault();
        if(this.state.postcontact.thananame === '' || this.state.postcontact.contact === '' || this.state.postcontact.location === ''){
            e.preventDefault();
            alert("Please check your input");
        }else{
            //console.log(this.state.postcontact);
            axios.post('http://127.0.0.1:8000/thana/contact/',this.state.postcontact).then(response => alert("success!!!")).catch(err=>alert("Error to save"));
            window.location.reload(false);
        }
    }
    render() {
        return (
            <Container>
                <br/>
                {this.state.islogin && <Form>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Thana</Form.Label>
                            <Form.Control type="text" value={this.state.postcontact.thananame} onChange={this.inputchange} name="thananame" />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Contact</Form.Label>
                            <Form.Control type="text" value={this.state.postcontact.contact} onChange={this.inputchange} name="contact" />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="text" value={this.state.postcontact.location} onChange={this.inputchange} name="location" />
                        </Form.Group>
                    </Form.Row>
                    <Button variant="primary" onClick={this.submitbutton}>ADD</Button>
                </Form>}
                <h2>Contact's for Emergency Call</h2>
                <h6>Either call 999</h6>
                <div className="admindashboardtable">
                <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Thana</th>
                    <th>Phone</th>
                    <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.contact.map(singlecontact =>{
                        return (
                            <tr>
                            <td>{singlecontact.id}</td>
                            <td>{singlecontact.thananame}</td>
                            <td>{singlecontact.contact}</td>
                            <td>{singlecontact.location}</td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </Table>
                </div>
            </Container>
        );
    }
}

export default Contactforhelp;