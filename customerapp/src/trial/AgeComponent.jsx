import React, { Component } from 'react'

export default class AgeComponent extends Component {
    shouldComponentUpdate(prevProps, prevState) {
        if (prevProps.age === this.props.age) {
            return false;
        }
        return true;
    }
    render() {
        console.log("AgeComponent renders!!!");
        return (
            <div>Age in AgeComponent {this.props.age} </div>
        )
    }
}
