import { reverseString } from "../../functions/reverseString";  

describe("Reverse string function test", () => {
    it("should return the reversed string", () => {
        expect(reverseString("hello")).toBe("olleh");
    });
});