import React, { Component } from 'react'
import CustomerRow from './CustomerRow'
import Filter from './Filter';

export default class CustomerList extends Component {
    x = 10; // this is also state wrt to OOP, not considered for reconcilliation
    y = 15; // this is also state wrt to OOP
    state = {
        customers: [
            { id: 1, firstName: "Alice", lastName: "Smith" },
            { id: 2, firstName: "Bob", lastName: "Johnson" },
            { id: 3, firstName: "Charlie", lastName: "Brown" },
            { id: 4, firstName: "Diana", lastName: "Williams" },
            { id: 5, firstName: "Ethan", lastName: "Davis" }
        ]
    }

    deleteCustomer(id) {
        let custs = this.state.customers.filter(c => c.id !== id);
        // this.state.customers = custs; // This updates the state, but reconciliation won't happen
       
        // async function to update state and trigger re-rendering
        this.setState({
            customers: custs
        });
    }
    // returns JSX
    render() {
        return (
            <div>
                <Filter />
                {
                    this.state.customers.map(c => <CustomerRow 
                            key={c.id}
                            delEvent = {this.deleteCustomer.bind(this)}
                            customer={c}/>)
                }
            </div>
        )
    }
}
