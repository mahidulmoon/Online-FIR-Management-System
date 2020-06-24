import React, { Component } from 'react';
import { ProgressBar,Container,Alert,Table,Button,ButtonGroup } from 'react-bootstrap';
import Firlist from './Firlist';
class Admindashboard extends Component {
    render() {
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
                    <th>Section</th>
                    
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    
                    
                    </tr>
                    
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