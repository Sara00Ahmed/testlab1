const {capitalizeTextFirstChar, createArray} = require("../lab/lab1");

// problem 1:

describe("Test capitalizeTextFirstChar", () => {
    it("Test that is return a string when input is string", () => {
        expect(typeof capitalizeTextFirstChar("i'm ahmed ali")).toBe("string");
    });
    it("should capitalize the first letter of each word", () => {
        expect(capitalizeTextFirstChar("i'm ahmed ali")).toBe("I'm Ahmed Ali");
    });
    it("Test that is return a string when input is number", () => {
        expect(() => capitalizeTextFirstChar(12)).toThrowError(TypeError);
    });
});

/////////////////////////////////////////////////////////////////////////////
// problem 2:

describe("Test createArray", () => {
    it("Test that is return an array ", () => {
        const result = createArray(3);
        expect(Array.isArray(result)).toBe(true);
    });
    it("should return an array of length 2 and include 1", () => {
        const result = createArray(2);
        expect(result.length).toBe(2);
        expect(result).toContain(1);
    });
    it("should return an array of length 3 and not include 3", () => {
        const result = createArray(3);
        expect(result.length).toBe(3);
        expect(result).not.toContain(3);
    });
});