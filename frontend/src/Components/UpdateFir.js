import React, { Component } from 'react';
import { Form,Col,Button,Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import jsPDF from 'jspdf';

class UpdateFir extends Component {
    state = {
        registeredfir:[],
        complainerinfo:[],
        goback: false,
    }
    componentDidMount(){
        if(localStorage.getItem('firtoken')){
            try{
                axios.get(`http://127.0.0.1:8000/fir/firregister/${this.props.location.passid.checkid}/`).then(res=>this.setState({registeredfir:res.data}));
                axios.get(`http://127.0.0.1:8000/fir/complainerinfo/${this.props.location.passid.checkid}`).then(res=>this.setState({complainerinfo:res.data}));
            }catch(err){
                this.setState({ goback:true });
            }
        }
    }
    dpdf = () =>{
        var doc = new jsPDF(); 
        var today = new Date();   
        doc.setTextColor(165, 0, 0);  
        doc.setFontType("bold");
        doc.text(70, 10, 'Online FIR Management System');  
        doc.setTextColor(0, 0, 0); 
        doc.setFont("times");   
        doc.text(10, 20, 'Victim Information:');   
        doc.setFontType("italic"); 
        doc.text(20, 30, `Name:${this.state.registeredfir.victimename}`);     
        doc.text(140, 30, `Age:${this.state.registeredfir.age}`); 
        doc.text(20, 40, `Date of Incedence:${this.state.registeredfir.dateofincedence}`);     
        doc.text(140, 40, `Time of Incedence:${this.state.registeredfir.timeofincedence}`);    
        doc.setTextColor(255, 0, 0);
        doc.text(20, 50, `Complain Type:${this.state.registeredfir.complaintype}`); 
        doc.setTextColor(0,0,0);
        doc.text(20, 60, `Address:${this.state.registeredfir.address}`);     
        doc.text(20, 90, `FIR Registration Time:${this.state.registeredfir.timeoffirregistration}`);
        doc.setFontType("bold");
        doc.text(10, 110, `Thana:${this.state.registeredfir.thana}`);
        doc.text(10, 130, 'Complainer Information:');   
        doc.setFontType("italic"); 
        doc.text(20, 140, `Name:${this.state.complainerinfo.name}`);     
        doc.text(130, 140, `Father's Name:${this.state.complainerinfo.fathername}`); 
        doc.text(20, 160, `Address:${this.state.complainerinfo.address}`);     
        doc.text(20, 150, `Contact:${this.state.complainerinfo.contact}`);    
        doc.setFontType("bold");
        doc.text(10,170,"Short Report(optional):")
        doc.text(10,250,`Signature of Investigation Officer: `);
        doc.setFontType("italic"); 
        doc.text(20,260,`Date:${today}`);
        doc.save('document.pdf'); // Save the PDF with name "katara"...    
    }
    render() {
        if(this.state.goback){
            return <Redirect to='/waitforcharge' />
        }
        return (
            <Container>
                <br/>
                
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Victim Name</Form.Label>
                        <Form.Control type="text" value={this.state.registeredfir.victimename} placeholder="Victim Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" value={this.state.registeredfir.age} placeholder="Approximate Age" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="message" value={this.state.registeredfir.address} placeholder="Place of Incedence" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Date of Incedence</Form.Label>
                        <Form.Control type="text" value={this.state.registeredfir.dateofincedence} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Time of Incedence(approximate)</Form.Label>
                        <Form.Control type="text" value={this.state.registeredfir.timeofincedence} />
                        </Form.Group>
                        
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Complain Type</Form.Label>
                        <Form.Control type="text" value={this.state.registeredfir.complaintype} placeholder="Victim Name" />
                        </Form.Group>

                    </Form.Row>
                    <br/>
                        <span>Complainer Info:</span>
                        <br/>
                        <br/>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Complainer Name</Form.Label>
                        <Form.Control type="text" value={this.state.complainerinfo.name} placeholder="Victim Name" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Contact</Form.Label>
                        <Form.Control type="text" value={this.state.complainerinfo.contact} placeholder="Victim Name" />
                        </Form.Group>

                    </Form.Row>
                    
                            
                        

                    <Button variant="primary" onClick={this.dpdf} type="submit">
                        Download PDF
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default UpdateFir;