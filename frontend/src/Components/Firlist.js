import React, { Component } from 'react';
import { Table,Container,Button } from 'react-bootstrap';
import { Redirect,Link } from 'react-router-dom';
import axios from 'axios';
class Firlist extends Component {
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
        singlefir.status = 'approved';
        //console.log(singlefir);
        axios.put(`http://127.0.0.1:8000/fir/firregister/${singlefir.id}/`,singlefir).then(res=>{
            alert("Pengind for Creating ChargeSheet")
            window.location.reload(false);
        });
    }
    spambutton = (e,singlefir) =>{
        singlefir.status = 'spam marked';
        //console.log(singlefir);
        axios.put(`http://127.0.0.1:8000/fir/firregister/${singlefir.id}/`,singlefir).then(res=>{alert("Spam Marked!!!");window.location.reload(false);});
    }
    render() {
        if( this.state.islogin === 'false' ){
            return <Redirect to='/login' />
        }
        return (
            <Container>
                <br/>
                <h2>Pending FIR list</h2>
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
                    <th>Status</th>
                    <th>Thana</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.registeredfir.map(singlefir=>{
                        if(singlefir.status !== 'approved' && singlefir.status!== 'ChargeSheet Registered'){
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
                                <td>{singlefir.status}</td>
                                <td>{singlefir.thana}</td>
                                <td><Button variant="primary" onClick={e => this.approvebutton(e,singlefir)}>Approve</Button> <br/>
                                <Button variant="danger" onClick={e => this.spambutton(e,singlefir)}> Spam....</Button></td>
                                
                                </tr>
                            )
                        }
                    })}
                    
                </tbody>
            </Table>
            </div>
            </Container>
        );
    }
}

export default Firlist;