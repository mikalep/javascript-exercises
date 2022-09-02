const roundToOneDecimal = function(value) {
  return Math.round(value * 10) / 10;
}

const ftoc = function(f) {
  let c = (f + 40) / 1.8 - 40;
  return roundToOneDecimal(c);
};

const ctof = function(c) {
  let f = (c + 40) * 1.8 - 40;
  return roundToOneDecimal(f);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
