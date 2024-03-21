import { repeatWord } from "../../functions/repeatWord";

describe("Repeat word function test", () => {
    it("should return the string with word repeated a specified number of times", () => {
        expect(repeatWord("hello", 3)).toBe("hello1 hello2 hello3");
    });
    it("should return the string with word repeated a specified number of times", () => {
        expect(repeatWord("hello", 1)).toBe("hello1");
    });
    it("should return the string with word repeated a specified number of times", () => {
        expect(repeatWord("hello", -3)).toBe(null);
    });
    it("should return the string with word repeated a specified number of times", () => {
        expect(repeatWord("hello", 0)).toBe("");
    });
    it("should return the string with word repeated a specified number of times", () => {
        expect(repeatWord("", 3)).toBe("");
    });
});