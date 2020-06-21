import React, { Component } from 'react';
import { Jumbotron,Button } from 'react-bootstrap';
class HomePage extends Component {
    render() {
        return (
            <Jumbotron>
                <h1>Welcome To Online FIR Management System</h1>
                <p>Online FIR Management is a web-based project. Our country having more population as compare to other countries. So that public security is most important part of security system of our country. Bangladesh police system is made for public security by the Bangladeshi government. If we used our technologies in Bangladeshi police system, then this is very useful for society. FIR is a First Investigation Report. If we are in any trouble, then we can lodge a complaint. FIR is first step, after FIR police can start the investigation. In previous days this system was offline. Person has to go to police station to lodge a complaint against someone else. There is a problem if there is no police station in nearby area. So this is very time consuming process. To solve this problem, we developed online system for registering the complaint of user or victim. FIR can be register by the victim or by any relatives of the victim.</p>
                <Button variant="primary">Complain My FIR</Button>
            </Jumbotron>
            
        );
    }
}

export default HomePage;