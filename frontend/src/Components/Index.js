import React, { Component } from 'react'
import Navigation from './Navigation';
import Footerfile from './Footerfile';
import HomePage from './HomePage';
import Bodypage from './Bodypage';
import Login from './Login';
import Registration from './Registration';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
export default class Index extends Component {
    render() {
        return (
            <React.Fragment>
               <Navigation />
               <Bodypage>
                <Router>
                    <Switch>
                        <Bodypage>
                            <Route path='/' exact component={HomePage} />
                            <Route path='/login' exact component={Login} />
                            <Route path='/register' exact component={Registration} />
                        </Bodypage>
                    </Switch>
                </Router>
               </Bodypage>
               <Footerfile />
            </React.Fragment>
        )
    }
}
