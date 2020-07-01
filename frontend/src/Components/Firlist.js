import React, { Component } from 'react';
import { Table,Container,Button,ButtonGroup } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
class Firlist extends Component {
    state = {
        islogin: '',
    }
    componentDidMount(){
        if(localStorage.getItem('firtoken')){
            this.setState({ islogin: 'true' });
        }else{
            this.setState({ islogin: 'false' });
        }
    }
    render() {
        if( this.state.islogin === 'false' ){
            return <Redirect to='/login' />
        }
        return (
            <Container>
                <br/>
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
                    <td><ButtonGroup><Button variant="primary">Approve</Button> ||
                    <Button variant="danger"> Spam</Button></ButtonGroup></td>
                    
                    </tr>
                    
                </tbody>
            </Table>
                </div>
            </Container>
        );
    }
}

export default Firlist;