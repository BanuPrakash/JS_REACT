describe("e2e delete a customer", () => {
    it("delete customer on button click", () => {
        cy.visit("http://localhost:5174");
        cy.get("button")
            .eq(3)
            .click()
            .get("button").then(rows => {
                expect(rows.length).to.eq(4);
            })
    })
});