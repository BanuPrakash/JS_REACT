describe("e2e filter customers", () => {
    it("filter customer using textbox", () => {
        cy.visit("http://localhost:5173");
        cy.get("input[placeholder='search by name']")
            .type("Geller")
            .get("button").then(rows => {
                expect(rows.length).to.eq(2);
            })
    })
});