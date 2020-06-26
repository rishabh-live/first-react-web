import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    };
    noStyles = {
        fontSize: 20,
        fontWeight: 'bold',
    };
    render() {     

        return (
            <React.Fragment>
                <span style = {this.noStyles} className={this.formatBadge()}>{this.formatCount()}</span>
                <button className="badge">Increment</button>
            </React.Fragment>
        );
    }

    formatBadge(){
        return this.state.count === 0 ? "badge badge-warning m-3" : "badge badge-primary m3";
    }

    formatCount(){
        return this.state.count === 0 ? "Zero" : this.state.count;
    }
}
 
export default Counter;