const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() - Test written by Kaschae Freeman", () => {
  describe("Error Handling", () => {
    it("should return return false if shift number is 0", () => {
      const actual = caesar("hello", 0);
      expect(actual).to.be.false;
    });
    it("should return false if shift number is greater than 25", () => {
      const actual = caesar("hello", 26);
      expect(actual).to.be.false;
    });
    it("should return false if shift number is less than 25", () => {
      const actual = caesar("hello", -26);
      expect(actual).to.be.false;
    });
  });
  describe("Coding Messages", () => {
    it("should return encoded message when given a string and shift number", () => {
      const expected = "wklqnixo";
      const actual = caesar("thinkful", 3);
      expect(actual).to.equal(expected);
    });
    it("should decode a message when given a string and shift number and encode set to false", () => {
      const expected = "thinkful";
      const actual = caesar("wklqnixo", 3, false);
      expect(actual).to.equal(expected);
    });
    it("should wrap around to front of alphabet if letter shifts outside of alphabet", () => {
      const expected = "cheud";
      const actual = caesar("zebra", 3);
      expect(actual).to.equal(expected);
    });
    it("should maintan spaces and symbols", () => {
      const expected = "this is a secret message!";
      const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
      expect(actual).to.equal(expected);
    });
    it("ignore capital letters", () => {
      const expected = "message given in caps";
      const actual = caesar("HZNNVBZ BDQZI DI XVKN", -5, false);
      expect(actual).to.equal(expected);
    });
  });
});
