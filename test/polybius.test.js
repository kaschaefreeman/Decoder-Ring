const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() - Test written by Kaschae Freeman", () => {
  describe("Encoding a message", () => {
    it("should encode a message by translating each letter to number pairs", () => {
      const expected = "3251131343";
      const actual = polybius("hello");
      expect(actual).to.equal(expected);
    });
    it(`should translate the letters "i" and "j" to the number 42`, () => {
      const expected = "4254423151";
      const actual = polybius("juice");
      expect(actual).to.equal(expected);
    });
    it("should leave spaces in return string", () => {
      const expected = "3251131343 2543241341";
      const actual = polybius("hello world");
      expect(actual).to.equal(expected);
    });
  });
  describe("Decoding a message", () => {
    it("should decode a message by translating each pair of numbers into a letter", () => {
      const expected = "hello";
      const actual = polybius("3251131343", false);
      expect(actual).to.equal(expected);
    });
    it("should translate 42 to both 'i' and 'j'", () => {
      const expected = "(i/j)u(i/j)ce";
      const actual = polybius("4254423151", false);
      expect(actual).to.equal(expected);
    });
    it("should leave spaces as is", () => {
      const expected = "hello world";
      const actual = polybius("3251131343 2543241341", false);
      expect(actual).to.equal(expected);
    });
    it("should return false if the length of all numbers is odd", () => {
      const actual = polybius("3251131343 254324134", false);
      expect(actual).to.be.false;
    });
  });
});
