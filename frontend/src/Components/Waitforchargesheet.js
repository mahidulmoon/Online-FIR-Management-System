import React, { Component } from 'react';
import { Table,Container,Button } from 'react-bootstrap';
class Waitforchargesheet extends Component {
    render() {
        return (
            <Container>
                <br/>
                <h2>Create ChargeSheet</h2>
                <div className="admindashboardtable">
                <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Complainer Name</th>
                    <th>Victime Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Date of Incidence</th>
                    <th>Date of Registration</th>
                    <th>Complaint</th>
                    <th>Section</th>
                    <th>Status</th>
                    <th>Action</th>
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
                    <td>Mark</td>
                    <td><Button variant="success">Mark as Done</Button></td>                   
                    </tr>
                    
                </tbody>
            </Table>
                </div>
            </Container>
        );
    }
}

export default Waitforchargesheet;