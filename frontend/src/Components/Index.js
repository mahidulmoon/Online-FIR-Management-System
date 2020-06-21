import React, { Component } from 'react'
import Navigation from './Navigation';
import Footerfile from './Footerfile';
export default class Index extends Component {
    render() {
        return (
            <React.Fragment>
               <Navigation />
               <Footerfile />
            </React.Fragment>
        )
    }
}
