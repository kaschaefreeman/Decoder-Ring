const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    // guard clause for incorrect shift inputs.
    //if shift falsy, less than -25 or greater than 25 return false
    if (!shift || shift < -25 || shift > 25) return false;
    const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
    //initialize variable of empty string
    let result = "";
    //initialze var to calc the index of alphabet array
    let alphabetIndexNum = 0;
    //loop through string
    for (let character of input) {
      //for each character set the index var to positive if encode and negative if decode
      encode ? (alphabetIndexNum = shift * 1) : (alphabetIndexNum = shift * -1);
      //for each character if it does not exist in alphabet put symbol in string var
      if (!alphabet.includes(character.toLowerCase())) {
        result += character;
      } else {
        //else, get index of the character in the alphabet array
        const characterIndex = alphabet.indexOf(character.toLowerCase());
        //add the index in the alphabet to total of shifting index var
        alphabetIndexNum += characterIndex;
        //if the shift index number is less than 0 wrap to end
        //and if shift index number is greater than 25 wrap to beginning
        if (alphabetIndexNum < -0) alphabetIndexNum += 26;
        if (alphabetIndexNum > 25) alphabetIndexNum -= 26;
        //add letter from the calculated index number of alphabet array to return string
        result += alphabet[alphabetIndexNum];
      }
    }
    return result;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
