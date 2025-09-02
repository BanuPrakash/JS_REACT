// test suite
describe("e2e delete a customer", () => {
    // test case
    it("delete customer on button click", () => {
        cy.visit("http://localhost:5173"); // opens the url
        cy.get("button")
            .eq(3)
            .click()
            .get("button").then(rows => {
                expect(rows.length).to.eq(4);
            })
    })
});