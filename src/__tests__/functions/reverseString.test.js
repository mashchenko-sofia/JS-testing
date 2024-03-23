import { reverseString } from "../../functions/reverseString";  

describe("Reverse string function test", () => {
    it("should return the reversed string", () => {
        expect(reverseString("hello")).toBe("olleh");
    });
    it("should return empty string", () => {
        expect(reverseString("")).toBe("");
    });
    it("should return the reversed string with whitespace", () => {
        expect(reverseString("привет мир")).toBe("рим тевирп");
    });
    it("should return the reversed string with different case", () => {
        expect(reverseString("ПрИвЕт")).toBe("тЕвИрП");
    });
    it("should return null", () => {
        expect(reverseString(null)).toBe(null);
    });
    it("should return undefined", () => {
        expect(reverseString(undefined)).toBe(undefined);
    });
});