import React, { Component } from 'react'
import CustomerRow from './CustomerRow'
import Filter from './Filter';

export default class CustomerList extends Component {
    x = 10; // this is also state wrt to OOP, not considered for reconcilliation
    y = 15; // this is also state wrt to OOP
    state = {
        customers: [
            { id: 1, firstName: "Rachel", lastName: "Green" },
            { id: 2, firstName: "Monica", lastName: "Geller" },
            { id: 3, firstName: "Charlie", lastName: "Brown" },
            { id: 4, firstName: "Diana", lastName: "Williams" },
            { id: 5, firstName: "Ross", lastName: "Geller" }
        ],
        original: [
            { id: 1, firstName: "Rachel", lastName: "Green" },
            { id: 2, firstName: "Monica", lastName: "Geller" },
            { id: 3, firstName: "Charlie", lastName: "Brown" },
            { id: 4, firstName: "Diana", lastName: "Williams" },
            { id: 5, firstName: "Ross", lastName: "Geller" }
        ]
    }

    constructor() {
        super();
        // the best, doesn't need to bind every time it renders
        this.filterCustomers = this.filterCustomers.bind(this);
    }

    filterCustomers(txt) {
        let custs = this.state.original.filter(c => {
            if (c.firstName.toUpperCase().indexOf(txt.toUpperCase()) >= 0 ||
                c.lastName.toUpperCase().indexOf(txt.toUpperCase()) >= 0) {
                return true;
            }
            return false;
        });

        this.setState({
            customers: custs
        });
    }

    deleteCustomer(id) {
        let custs = this.state.original.filter(c => c.id !== id);
        // this.state.customers = custs; // This updates the state, but reconciliation won't happen
        // async function to update state and trigger re-rendering
        this.setState({
            original: custs,
            customers: custs
        });
    }

    // returns JSX
    render() {
        return (
            <div>
                {/* <Filter filterEvt={(txt) => this.filterCustomers(txt)} /> */}
                {/* <Filter filterEvt={this.filterCustomers.bind(this)} /> */}
                <Filter filterEvt={this.filterCustomers} />
                {
                    this.state.customers.map(c => <CustomerRow
                        key={c.id}
                        delEvent={this.deleteCustomer.bind(this)}
                        customer={c} />)
                }
            </div>
        )
    }
}
