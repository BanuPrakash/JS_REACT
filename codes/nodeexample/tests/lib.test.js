const { add, filter, map, forEach } = require('../src/lib');

// vitest.fn(); 
// test suite, Assemble collection of tests
describe("testing lib ", () => {
    // test spec like @Test of JUnit
    it("testing add ", () => {
        let result = add(4, 5);
        expect(result).toBe(9);
    });

    // test spec like @Test of JUnit
    it("testing filter numbers ", () => {
        // filter has predicate function as dependency, need to mock this function
        const predicateMockFn = jest.fn(no => no % 2 === 0); // mock fn
        let evens = filter([5, 10, 9, 7, 6], predicateMockFn);
        expect(evens.length).toBe(2);
        expect(predicateMockFn.mock.calls.length).toBe(5);
        expect(predicateMockFn.mock.calls[0][0]).toBe(5);
        expect(predicateMockFn.mock.calls[1][0]).toBe(10);
    });

    // test spec like @Test of JUnit
    it("testing filter products ", () => {

    });

    // test spec like @Test of JUnit
    it("testing map to transform numbers", () => {

    });

    // test spec like @Test of JUnit
    it("testing forEach", () => {
        const action = jest.fn(); // mock
        forEach([5, 10, 9, 7, 6], action);
        expect(action.mock.calls.length).toBe(5);
        expect(action.mock.calls[0][0]).toBe(5);
        expect(action.mock.calls[1][0]).toBe(10);
    });
})