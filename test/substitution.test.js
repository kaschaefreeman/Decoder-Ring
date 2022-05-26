const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() - Tests written by Kaschae Freeman", () => {
  describe("error handling", () => {
    it("should return false if the substitution alphabet is missing", () => {
      const message = "thinkful";
      const actual = substitution(message);
      expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet is not 26 characters in length", () => {
      const message = "thinkful";
      const alphabet = "abcde";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet contains repeating characters", () => {
      const message = "thinkful";
      const alphabet = "abcabcabcabcabcabcabcabcab";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });
  });

  describe("encoding a message", () => {
    it("should encode a message by using the given substitution alphabet", () => {
      const message = "thinkful";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(message, alphabet);
      const expected = "jrufscpw";

      expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
      const message = "you are an excellent spy";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(message, alphabet);
      const expected = "elp xhm xf mbymwwmfj dne";

      expect(actual).to.equal(expected);
    });

    it("should work with any kind of key even including special characters", () => {
      const message = "message";
      const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet);
      const expected = "y&ii$r&";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by using the given substitution alphabet", () => {
      const message = "jrufscpw";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(message, alphabet, false);
      const expected = "thinkful";

      expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
      const message = "elp xhm xf mbymwwmfj dne";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(message, alphabet, false);
      const expected = "you are an excellent spy";

      expect(actual).to.equal(expected);
    });

    it("should work with any kind of key with unique characters", () => {
      const message = "y&ii$r&";
      const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet, false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });
  });
});
// Write your tests here!
