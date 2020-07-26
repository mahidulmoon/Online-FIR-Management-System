import React, { Component } from 'react';
import { ProgressBar,Container,Alert,Table,Form,Col } from 'react-bootstrap';
import Firlist from './Firlist';
import { Redirect,Link } from 'react-router-dom';
import axios from 'axios';
class Admindashboard extends Component {
    state = {
        islogin: '',
        isadmin: '',
        registeredfir:[],
        statistic:[],
    }
    componentDidMount(){
        if(localStorage.getItem('firtoken')){
            this.setState({ islogin: 'true' });
            if(localStorage.getItem('admin')==='true'){
                this.setState({isadmin: 'true'})
                axios.get('http://127.0.0.1:8000/fir/firregister/').then(res=>this.setState({registeredfir:res.data}));
                axios.get('http://127.0.0.1:8000/fir/adminstatic/').then(res=>this.setState({statistic:res.data}))
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
                <Form.Row>
                    <Form.Group as={Col}>
                        <div className="panelbox">
                            <div className="">
                                <i className="adminpanellogo"><img src="./sheriff.png" /></i>
                                <h4>{this.state.statistic.totaluser}</h4>
                                Registered User(s)
                            </div>
                        </div>
                        <div className="panelbox">
                            <div className="">
                                <i className="adminpanellogo"><img src="./police.png" /></i>
                                <h4>{this.state.statistic.highauth}</h4>
                                Higher Authority
                            </div>
                        </div>
                        <div className="panelbox">
                            <div className="">
                                <i className="adminpanellogo"><img src="./icons8-police-badge-50.png" /></i>
                                <h4>{this.state.statistic.police}</h4>
                                Verfied Police
                            </div>
                        </div>
                        
                        
                    </Form.Group>
                    <Form.Group as={Col}>
                        <div className="admindashboarddatavis">
                            <Alert variant="info">Registered ChargeSheet
                            <ProgressBar variant="success" now={this.state.statistic.chargesheet} label={`${this.state.statistic.chargesheet}%`} /></Alert>
                            <Alert variant="info">Total Pending FIR
                            <ProgressBar variant="info" now={this.state.statistic.pending} label={`${this.state.statistic.pending}%`} /></Alert>
                            <Alert variant="info">Approved FIR
                            <ProgressBar variant="warning" now={this.state.statistic.approve} label={`${this.state.statistic.approve}%`}/></Alert>
                            <Alert variant="info">Spam FIR
                            <ProgressBar variant="danger" now={this.state.statistic.spam} label={`${this.state.statistic.spam}%`} /></Alert>
                        </div>
                    </Form.Group>
                </Form.Row>
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