import React, { Component } from 'react';

class Bodypage extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Bodypage;