import React, { Component } from 'react'
import CustomerRow from './CustomerRow'

export default class CustomerList extends Component {
    state = {
        customers: [
            { id: 1, firstName: "Alice", lastName: "Smith" },
            { id: 2, firstName: "Bob", lastName: "Johnson" },
            { id: 3, firstName: "Charlie", lastName: "Brown" },
            { id: 4, firstName: "Diana", lastName: "Williams" },
            { id: 5, firstName: "Ethan", lastName: "Davis" }
        ]
    }
    render() {
        return (
            <div>
                {
                    this.state.customers.map(customer => <CustomerRow 
                            customer={customer}/>)
                }
            </div>
        )
    }
}
