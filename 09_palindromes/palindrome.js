const reverseStr = (str) => {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

const palindrome = (str) => {
  const regex = /[^a-z]/g;
  const reversed = reverseStr(str).toLowerCase().replace(regex, "");
  const input = str.toLowerCase().replace(regex, "");

  return reversed === input;
};

// Do not edit below this line
module.exports = palindrome;
