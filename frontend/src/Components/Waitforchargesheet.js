import React, { Component } from 'react';
import { Table,Container,Button } from 'react-bootstrap';
import { Redirect,Link } from 'react-router-dom';
import axios from 'axios';
class Waitforchargesheet extends Component {
    state = {
        islogin: '',
        registeredfir:[],
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
        axios.put(`http://127.0.0.1:8000/fir/firregister/${singlefir.id}/`,singlefir).then(res=>{
            alert("Pengind for Creating ChargeSheet")
            window.location.reload(false);
        });
    }
    render() {
        if( this.state.islogin === 'false' ){
            return <Redirect to='/login' />
        }
        return (
            <Container>
                <br/>
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
                                <td><Button variant="success" onClick={e => this.approvebutton(e,singlefir)}>Mark as Done</Button></td>
                                
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