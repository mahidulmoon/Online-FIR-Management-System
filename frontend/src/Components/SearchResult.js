import React, { Component } from 'react';
import { Modal,Form,Button,Col,Row, Container } from 'react-bootstrap';
import axios from 'axios';
export default class SearchResult extends Component {
    state = {
        searchresult:[],
        searchvalue:{
            victimename:''
        }
    }
    checkbuttonpress = e =>{
        //console.log(this.state.searchvalue);
        axios.post('http://127.0.0.1:8000/fir/searchfir/',this.state.searchvalue).then(res => {if(res.data.message === 'No result found'){alert('No result Found')}else{this.setState({searchresult:res.data})}}).catch(err=> alert('error to send'));
    }
  render() {
    return (
        <div>
            <Container>
            <Form>
            <Form.Row>
                <Col>
                <Form.Control placeholder="victimename" onChange={(e)=>this.setState({searchvalue:{victimename:e.target.value}})} />
                </Col>
                
                <Button variant='primary'onClick={this.checkbuttonpress} >Check</Button>
                
            </Form.Row>
            </Form>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>FIR Status</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Complainer Name:{this.state.searchresult.complainername}</p>
                    <p style={{color:'red'}}>Victim Name:{this.state.searchresult.victimename}</p>
                    <p>Age:{this.state.searchresult.age}</p>
                    <p>Address:{this.state.searchresult.address}</p>
                    <p>Time of FIR Registration:{this.state.searchresult.timeoffirregistration}</p>
                    <p style={{color:'red'}}>complaintype:{this.state.searchresult.complaintype}</p>
                    <p style={{color:'red'}}>Status:{this.state.searchresult.status}</p>
                    <p style={{color:'red'}}>Thana:{this.state.searchresult.thana}</p>
                </Modal.Body>

            
            </Modal.Dialog>
            </Container>
        </div>
    );
  }
}
