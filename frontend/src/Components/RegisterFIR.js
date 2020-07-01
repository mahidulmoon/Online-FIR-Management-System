import React, { Component } from 'react';
import axios from 'axios';
import { Form,Col,Button,Container,Modal } from 'react-bootstrap';
class RegisterFIR extends Component {
    state ={
        show: true,
        modalform:{
            name:'',fathername:'',address:'',contact:''
        },
        registerfir:{
            complainername:'',victimename:'',age:'',address:'',dateofincedence:'',timeofincedence:'',complaintype:'',thana:''
        },
        thana:[],
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/thana/contact/').then(res=> this.setState({ thana: res.data }));
    }
    handleClose = (event) =>{
        this.setState({ show: false });
    }
    modalinputchange = e =>{
        const cred = this.state.modalform;
        cred[ e.target.name ] = e.target.value;
        this.setState({ modalform: cred });
    }
    modalsubmit = e =>{
        e.preventDefault();
        if(this.state.modalform.name === '' || this.state.modalform.fathername === '' || this.state.modalform.address === '' || this.state.modalform.contact === '' ){
            alert("Check your inputs");
        }else{
            console.log(this.state.modalform);
            this.setState({ show: false });
        }
    }
    firforminputchange = e =>{
        const cred2 = this.state.registerfir;
        cred2[ e.target.name ] = e.target.value;
        this.setState({ registerfir: cred2 });
    }
    firformsubmit = e =>{
        e.preventDefault();
        const cred3 = this.state.registerfir;
        cred3[ "complainername" ] = this.state.modalform.name;
        this.setState({ registerfir: cred3 });
        if(this.state.registerfir.complainername === '' || this.state.registerfir.victimename === '' || this.state.registerfir.age === '' || this.state.registerfir.address === '' || this.state.registerfir.dateofincedence === '' || this.state.registerfir.timeofincedence === '' || this.state.registerfir.complaintype === '' || this.state.registerfir.thana === '' ){
            alert("Please check your inputs");
        }else{
            console.log(this.state.registerfir);
        }
    }
    render() {
        return (
            <Container>
                <br/>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Complainer Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><Form>
                        <Form.Group controlId="formGroupEmail">
                        <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" name="name" onChange={this.modalinputchange} value={this.state.modalform.name} />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                        <Form.Label>Father's Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Father's Name" name="fathername" onChange={this.modalinputchange} value={this.state.modalform.fathername} />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                        <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Address" name="address" onChange={this.modalinputchange} value={this.state.modalform.address} />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                        <Form.Label>Contact</Form.Label>
                            <Form.Control type="text" placeholder="Phone" name="contact" onChange={this.modalinputchange} value={this.state.modalform.contact} />
                        </Form.Group>
                        
                        
                        <Button variant="primary" type="submit" onClick={this.modalsubmit}>
                            Submit
                        </Button>
                    </Form></Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    
                    </Modal.Footer>
                </Modal>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Victim Name</Form.Label>
                        <Form.Control type="text" placeholder="Victim Name" name="victimename" onChange={this.firforminputchange} value={this.state.registerfir.victimename} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" placeholder="Approximate Age" name="age" onChange={this.firforminputchange} value={this.state.registerfir.age} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="Address" name="address" onChange={this.firforminputchange} value={this.state.registerfir.address} />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Date of Incedence</Form.Label>
                        <Form.Control type="date" name="dateofincedence" onChange={this.firforminputchange} value={this.state.registerfir.dateofincedence} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Time of Incedence(approximate)</Form.Label>
                        <Form.Control type="time" name="timeofincedence" onChange={this.firforminputchange} value={this.state.registerfir.timeofincedence} />
                        </Form.Group>
                        
                    </Form.Row>

                    <Form.Control
                            as="select"
                            className="my-1 mr-sm-2"
                            id="inlineFormCustomSelectPref"
                            name="complaintype"
                            onChange={this.firforminputchange}
                            custom
                        >
                            <option value="0">Choose Complaint Type...</option>
                            <option value="Attempt to Mureder">Attempt to Murder</option>
                            <option value="Theft">Theft</option>
                            <option value="Domestic Violence">Domestic Violence</option>
                            <option value="other">other</option>
                    </Form.Control>
                    <Form.Control
                            as="select"
                            className="my-1 mr-sm-2"
                            id="inlineFormCustomSelectPref"
                            name="thana"
                            onChange={this.firforminputchange}
                            custom
                        >
                            <option value="0">Choose Thana..</option>
                            {this.state.thana.map(singlethana=>{
                                return <option value={singlethana.thananame}>{singlethana.thananame}</option>
                            })}
                            
                    </Form.Control>

                    <Button variant="primary" type="submit" onClick={this.firformsubmit} >
                        Submit
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default RegisterFIR;