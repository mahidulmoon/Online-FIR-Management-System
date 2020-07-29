import React, { Component } from 'react';
import { Table,Container,Button,Modal,Form } from 'react-bootstrap';
import { Redirect,Link } from 'react-router-dom';
import axios from 'axios';
class Waitforchargesheet extends Component {
    state = {
        islogin: '',
        registeredfir:[],
        show: false,
        chargesheetfileupload:{
            approverid:localStorage.getItem('firuserid'),filefield:null
        },
        finalsinglefir:[]
    }
    handleClose = (event) =>{
        this.setState({ show: false });
    }
    componentDidMount(){
        if(localStorage.getItem('firtoken')){
            this.setState({ islogin: 'true' });
            axios.get('http://127.0.0.1:8000/fir/firregister/').then(res=>this.setState({registeredfir:res.data}));
        }else{
            this.setState({ islogin: 'false' });
        }
    }
    approvebutton = (e,singlefir) =>{
        singlefir.status = 'ChargeSheet Registered';
        //console.log(singlefir);
        this.setState({finalsinglefir:singlefir});
        this.setState({show:true});
    }
    fileuploadchange=e=>{
        this.state.chargesheetfileupload.filefield = e.target.files[0];
    }
    onfilesubmit=(e)=>{
        e.preventDefault();
        const uploadData = new FormData();
        uploadData.append('approverid',this.state.chargesheetfileupload.approverid);
        uploadData.append('filefield',this.state.chargesheetfileupload.filefield,this.state.chargesheetfileupload.filefield.name);
        //console.log(uploadData);
        //console.log(this.state.chargesheetfileupload);
        //console.log(this.state.finalsinglefir);
        axios.post('http://127.0.0.1:8000/fir/chargesheetfile/',uploadData).then(res => {
            axios.put(`http://127.0.0.1:8000/fir/firregister/${this.state.finalsinglefir.id}/`,this.state.finalsinglefir).then(res=>{
            alert("FIR report submitted")
            window.location.reload(false);
        });
        }).catch(error => console.log(error));

    }
    render() {
        if( this.state.islogin === 'false' ){
            return <Redirect to='/login' />
        }
        return (
            <Container>
                <br/>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Complainer Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><Form>
                    <Form.Group>
                        <Form.Group>Upload FIR(report) file</Form.Group>
                        <Form.File id="exampleFormControlFile1" onChange={this.fileuploadchange} />
                    </Form.Group>
                        
                        
                        
                        <Button variant="primary" type="submit" onClick={this.onfilesubmit} >
                            Upload
                        </Button>
                    </Form></Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    
                    </Modal.Footer>
                </Modal>
                <h2>FIR list</h2>
                <div className="admindashboardtable">
                <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    
                    <th>Victime Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Date of Incidence</th>
                    
                    <th>Complaint</th>
                    <th>Status</th>
                    <th>Thana</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.registeredfir.map(singlefir=>{
                        {if(singlefir.status==='approved'){
                            return(
                                <tr>
                                <td>{singlefir.id}</td>
                                
                                <td>{singlefir.victimename}</td>
                                <td>{singlefir.age}</td>
                                <td>{singlefir.address}</td>
                                
                                <td>{singlefir.timeoffirregistration.slice(0,10)}<br/>{singlefir.timeoffirregistration.slice(11,16)}</td>
                                <td><Link to={{ pathname:'/updatefir', passid:{checkid:singlefir.id}}}>{singlefir.complaintype}</Link></td>
                                <td>{singlefir.status}</td>
                                <td>{singlefir.thana}</td>
                                <td><Button variant="success" onClick={e => this.approvebutton(e,singlefir)}>Create ChargeSheet</Button></td>
                                
                                </tr>
                            )
                        }}
                    })}
                    
                </tbody>
            </Table>
            </div>
            </Container>
        );
    }
}

export default Waitforchargesheet;