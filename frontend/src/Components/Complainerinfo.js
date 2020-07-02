import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Complainerinfo extends Component {
    state={
        info:[],
    }
    componentDidMount(){
        axios.get(`http://127.0.0.1:8000/fir/complainerinfo/${this.props.location.infoid.check}/`).then(res=>this.setState({ info:res.data }))
    }
    render() {
        return (
            <div>
                <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Complainer Details</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Name:{this.state.info.name}</p>
                    <p>Name:{this.state.info.fathername}</p>
                    <p>Name:{this.state.info.address}</p>
                    <p>Name:{this.state.info.contact}</p>
                </Modal.Body>

                <Modal.Footer>
                    <Link >Wired2v1</Link>
                </Modal.Footer>
                </Modal.Dialog>
            </div>
        );
    }
}

export default Complainerinfo;