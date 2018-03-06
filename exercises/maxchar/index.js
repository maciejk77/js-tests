// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charMap = {};
  let maxValue = 0;
  let maxChar = '';

  for(let letter of str) {
    !charMap[letter] ? charMap[letter] = 1 : charMap[letter]++;
  }

  for(let char in charMap) {
    if(charMap[char] > maxValue) {
      maxValue = charMap[char];
      maxChar = char;
    }
  }
  
  return maxChar;
}

module.exports = maxChar;
