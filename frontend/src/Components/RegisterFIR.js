import React, { Component } from 'react';
import { Form,Col,Button,Container,Modal } from 'react-bootstrap';
class RegisterFIR extends Component {
    state ={
        show: true,
    }
    handleClose = (event) =>{
        this.setState({ show: false });
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
                            <Form.Control type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                        <Form.Label>Father's Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Father's Name" />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                        <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Address" />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                        <Form.Label>Contact</Form.Label>
                            <Form.Control type="text" placeholder="Phone" />
                        </Form.Group>
                        
                        
                        <Button variant="primary" type="submit">
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
                        <Form.Control type="text" placeholder="Victim Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" placeholder="Approximate Age" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="Place of Incedence" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Date of Incedence</Form.Label>
                        <Form.Control type="date"  />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Time of Incedence(approximate)</Form.Label>
                        <Form.Control type="time"  />
                        </Form.Group>
                        
                    </Form.Row>

                    <Form.Control
                            as="select"
                            className="my-1 mr-sm-2"
                            id="inlineFormCustomSelectPref"
                            custom
                        >
                            <option value="0">Choose Complaint Type...</option>
                            <option value="1">Attempt to Murder</option>
                            <option value="2">Theft</option>
                            <option value="3">Domestic Violence</option>
                            <option value="3">other</option>
                        </Form.Control>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default RegisterFIR;