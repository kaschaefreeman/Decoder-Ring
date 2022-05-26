const polybiusModule = (function () {
  //declare object of Polybius Square
  const alphabet = {
    11: "a", 21: "b", 31: "c", 41: "d", 51: "e",
    12: "f", 22: "g", 32: "h", 42: `(i\/j)`, 52: "k",
    13: "l", 23: "m", 33: "n", 43: "o", 53: "p",
    14: "q", 24: "r", 34: "s", 44: "t", 54: "u",
    15: "v", 25: "w", 35: "x", 45: "y", 55: "z",
  };
  //Helper function to return encoded message
  const polybiusEncode = (input) => {
    let result = "";
    const numberPairs = Object.keys(alphabet);
    //loop through each character in input
    for (const character of input) {
      //swich output for different characters
      switch (character) {
        //leave spaces in input
        case " ":
          result += character;
          break;
        //add the pair of 42 if character is "i" or "j" to results string
        case "i":
        case "j":
          result += "42";
          break;
        //default case assuming it is a letter in the alphabet
        //add the number pair to the results string
        default:
          result += numberPairs.find(
            (key) => alphabet[key] === character.toLowerCase()
          );
      }
    }
    return result;
  };
  //helper function to decode a message
  const polybiusDecode = (input) => {
    //check the total length if the input string without spaces
    //gaurd clause to ensure input is a string of ordered pairs and not an odd number
    const noSpaceString = input.replace(" ", "");
    if (noSpaceString.length % 2 !== 0) return false;
    let result = "";
    //loop through characters of input string in two's
    for (let i = 0; i < input.length; i += 2) {
      //if the character is a space add space to result and increment to the next character
      if (input[i] == " ") {
        result += " ";
        i++;
      }
      //declare the number pair from input to be the i and the character after
      const inputPair = input[i] + input[i + 1];
      //add the value of the pair from alphabet object to result string
      result += alphabet[inputPair];
    }
    return result;
  };
  function polybius(input, encode = true) {
    //if encode is true call function to encode, else call decode function
    return encode ? polybiusEncode(input) : polybiusDecode(input);
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
