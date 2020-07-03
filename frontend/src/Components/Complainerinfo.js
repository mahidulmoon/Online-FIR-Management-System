import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import { Link,Redirect } from 'react-router-dom';
class Complainerinfo extends Component {
    state={
        info:[],
        admin:'',
        goback: false,
    }
    componentDidMount(){
        if(localStorage.getItem('firtoken')){
            try{
                axios.get(`http://127.0.0.1:8000/fir/complainerinfo/${this.props.location.infoid.check}/`).then(res=>this.setState({ info:res.data }))
                this.setState({ admin: localStorage.getItem('admin') })
            }catch(err){
                this.setState({goback:true});
            }
        }
    }
    render() {
        if(this.state.goback){
            return <Redirect  to='/firlist' />
        }
        return (
            <div>
                <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Complainer Details</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Name:{this.state.info.name}</p>
                    <p>Father Name:{this.state.info.fathername}</p>
                    <p>Address:{this.state.info.address}</p>
                    <p>Contact:{this.state.info.contact}</p>
                </Modal.Body>

                <Modal.Footer>
                    {this.state.admin === 'true' && <Link to='/admindashboard' >Back</Link>}
                    {this.state.admin === 'false' && <Link to='/firlist' >Back</Link>}
                </Modal.Footer>
                </Modal.Dialog>
            </div>
        );
    }
}

export default Complainerinfo;