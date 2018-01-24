import React, { Component } from 'react';

class Time extends Component {
    constructor() {
        super();
        let time = new Date().toLocaleString();
        this.state = {
            date: time
        };
    }

    render() {
        return (
            <div className="time">
                <p>The date is: {this.state.date} </p>
            </div>
        );
    }
}

export default Time;
