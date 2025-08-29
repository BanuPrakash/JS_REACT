import { describe, it, expect, vitest } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react'
import CustomerRow from '../components/CustomerRow';

// testing in isolation by mocking
describe("testing <CustomerRow />", () => {
    let mockCustomer = {
        "id": 52,
        "firstName": "Harry",
        "lastName": "Potter"
    }

    let callback = vitest.fn();
    it("testing <CustomerRow /> render", () => {
        render(<CustomerRow
            delEvent={callback}
            customer={mockCustomer} />);
        screen.debug();
        let elementHarry = screen.queryByText(/Harry/);
        expect(elementHarry).toBeInTheDocument();

    });

    it("delete operation in <CustomerRow />", () => {
        render(<CustomerRow
            delEvent={callback}
            customer={mockCustomer} />);
        let btn = screen.getByRole('button');

        fireEvent.click(btn);
        expect(callback.mock.calls.length).toBe(1); // actual deleteCustomer of CustomerList
        expect(callback).toBeCalledWith(52); // pass 52 to deleteCustomer
    });
})