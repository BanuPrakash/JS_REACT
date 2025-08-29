import React, { Component } from 'react'
import { faker, th } from '@faker-js/faker';
import NameComponent from './NameComponent';
import AgeComponent from './AgeComponent';

export default class ParentComponent extends Component {
    state = {
        name: 'Roger',
        age: 24
    }
    changeName() {
        this.setState({
            name: faker.person.fullName()
        })
    }
    changeAge() {
        this.setState({
            age: this.state.age + 1
        })
    }
    render() {
        console.log("Parent Component renders!!!");
        return (
            <div>
                ParentComponent <br />
                <NameComponent name={this.state.name}/> <br />
                <AgeComponent age={this.state.age} /> <br />
                <button type='button' onClick={this.changeAge.bind(this)}>Change Age</button> <br />
                <button type='button' onClick={this.changeName.bind(this)}>Change Name</button> <br />
            </div>
        )
    }
}
