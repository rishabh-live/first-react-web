import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    };
    render() {     

        return (
            <React.Fragment>
                <span className="badge badge-primary">{this.formatCount()}</span>
                <button className="badge">Increment</button>
            </React.Fragment>
        );
    }

    formatCount(){
        return this.state.count === 0 ? "Zero" : this.state.count;
    }
}
 
export default Counter;