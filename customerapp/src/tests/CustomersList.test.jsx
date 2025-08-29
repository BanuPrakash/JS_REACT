import { describe, it, expect } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react'
import CustomerList from '../../src/components/CustomerList';


describe("testing <CustomerList />", () => {
    // test spec
    it("testing rendering <CustomerList />", () => {
        render(<CustomerList />);
        // screen.debug();
        let btns = screen.queryAllByRole('button');
        expect(btns.length).toBe(5);
    })

    it("testing delete operation <CustomerList/>", async () => {
        render(<CustomerList />);
        // screen.debug();
        let btns = screen.queryAllByRole('button');
        await fireEvent.click(btns[2]);
        btns = await screen.queryAllByRole('button');
        expect(btns.length).toBe(4);
    });

    it("testing filter customers <CustomerList/>", () => {
        render(<CustomerList />);

        let txtBox = screen.queryByPlaceholderText('search by name');
        fireEvent.change(txtBox, { "target": { "value": "Geller" } });
        screen.debug();
        let elementMonica = screen.queryByText(/Monica/);
        expect(elementMonica).toBeInTheDocument();

        let btns = screen.queryAllByRole('button');
        expect(btns.length).toBe(2);

    });
});