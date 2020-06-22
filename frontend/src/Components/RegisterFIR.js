import React, { Component } from 'react';
import { Form,Col,Button,Container } from 'react-bootstrap';
class RegisterFIR extends Component {
    render() {
        return (
            <Container>
                <br/>
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