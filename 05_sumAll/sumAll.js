const sumAll = function(...args) {
  let min   = args[0];
  let max   = args[args.length-1];
  let total = 0;

  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    return "ERROR";
  }
  if (min < 0 || max < 0) {
    return "ERROR";
  }
  if (min > max) {
    [min, max] = [max, min];
  }

  for (let i = min; i < max + 1; i++) {
    total += i;
  }

  return total;
};

// Do not edit below this line
module.exports = sumAll;
