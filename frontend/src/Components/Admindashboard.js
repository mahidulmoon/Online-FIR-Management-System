import React, { Component } from 'react';
import { ProgressBar,Container,Alert,Table } from 'react-bootstrap';
import Firlist from './Firlist';
import { Redirect,Link } from 'react-router-dom';
import axios from 'axios';
class Admindashboard extends Component {
    state = {
        islogin: '',
        isadmin: '',
        registeredfir:[],
    }
    componentDidMount(){
        if(localStorage.getItem('firtoken')){
            this.setState({ islogin: 'true' });
            if(localStorage.getItem('admin')==='true'){
                this.setState({isadmin: 'true'})
                axios.get('http://127.0.0.1:8000/fir/firregister/').then(res=>this.setState({registeredfir:res.data}));
            }else{
                this.setState({isadmin: 'false'})
            }
            //window.location.reload(false);
        }else{
            this.setState({ islogin: 'false' });
        }
    }
    render() {
        if( this.state.islogin === 'false' ){
            return <Redirect to='/login' />
        }else if(this.state.isadmin === 'false'){
            return <Redirect  to='/firlist' />
        }
        return (
            <Container>
                <br/>
                <div className="admindashboarddatavis">
                    <Alert variant="info">Registered ChargeSheet
                    <ProgressBar variant="success" now={40} label={`${40}%`} /></Alert>
                    <Alert variant="info">Pending for ChargeSheet
                    <ProgressBar variant="info" now={20} label={`${20}%`} /></Alert>
                    <Alert variant="info">Approved FIR
                    <ProgressBar variant="warning" now={60} label={`${60}%`}/></Alert>
                    <Alert variant="info">Pending FIR
                    <ProgressBar variant="danger" now={80} label={`${80}%`} /></Alert>
                </div>
                <br/>
                <h2>Registered ChargeSheet</h2>
                <div className="admindashboardtable"><Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Complainer Name</th>
                    <th>Victime Name</th>
                    <th>ChargeSheet Register's Name</th>
                    <th>Address</th>
                    <th>Date of Incidence</th>
                    <th>Date of Registration</th>
                    <th>Complaint</th>
                    <th>Thana</th>
                    
                    </tr>
                </thead>
                <tbody>
                {this.state.registeredfir.map(singlefir=>{
                        {if(singlefir.status==='ChargeSheet Registered'){
                            return(
                                <tr>
                                <td>{singlefir.id}</td>
                                <td><Link to={{ pathname:'/info', infoid:{ check: singlefir.id }}}>{singlefir.complainername}</Link></td>
                                <td>{singlefir.victimename}</td>
                                <td>{singlefir.age}</td>
                                <td>{singlefir.address}</td>
                                <td>{singlefir.dateofincedence}<br/>{singlefir.timeofincedence}</td>
                                <td>{singlefir.timeoffirregistration.slice(0,10)}<br/>{singlefir.timeoffirregistration.slice(11,16)}</td>
                                <td>{singlefir.complaintype}</td>
                                <td>{singlefir.thana}</td>
                                
                                </tr>
                            )
                        }}
                    })
                }
                    
                </tbody>
            </Table></div>
            <div>
                <h2>Pending FIR</h2>
                <Firlist />
            </div>
            </Container>
        );
    }
}

export default Admindashboard;