const substitutionModule = (function () {
  //declare traditional alphabet in array
  const alphabetMain = [..."abcdefghijklmnopqrstuvwxyz"];
  //helper function to ensure the substitute alphabet was entered correctly
  const checkAlphabetInput = (alphabet) => {
    //declare varible for check status
    let check = true;
    //if no alphabet given or length of alphabet less than 26 characters switch check status to false
    if (!alphabet || alphabet.length != 26) check = false;
    //if there is an alphabet loop through subtstitute alphabet to ensure there are no repeating characters
    if (alphabet) {
      for (let character of alphabet) {
        if (alphabet.indexOf(character) != alphabet.lastIndexOf(character))
          check = false;
      }
    }
    return check;
  };

  function substitution(input, alphabet, encode = true) {
    //call helper function to ensure the substitute alphabet was entered correctly
    const check = checkAlphabetInput(alphabet);
    if (!check) return false;
    //declare empty strings
    //alphabetIn holds the alphabet string that input is read in
    //alphabetOut holds alphabet string the output will be written in
    let alphabetIn = "";
    let alphabetOut = "";
    //switch input and output alphabets.
    //if encode, input string is read with the traditional alphabet and output is written in the substitute alphabet
    if (encode) {
      alphabetIn = alphabetMain;
      alphabetOut = alphabet;
      //if decode, input is read in the substitute alphabet and output will be written in the traditional alphabet
    } else {
      alphabetIn = alphabet;
      alphabetOut = alphabetMain;
    }
    //declare empty string for results
    let results = "";
    //loop through input to read each character
    for (let character of input) {
      //add space to results string if character is a space
      if (character == " ") {
        results += " ";
        //if not a space get index of character from the input alphabet string
        //then add the character of the matching output alphabet to results string
      } else {
        const characterIndex = alphabetIn.indexOf(character.toLowerCase());
        results += alphabetOut[characterIndex];
      }
    }
    return results;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
