const repeatString = function(string, num) {
  if (num >= 0) {
    let str = "";

    for (let i = 0; i < num; i++) {
      str += string;
    }
    return str;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
