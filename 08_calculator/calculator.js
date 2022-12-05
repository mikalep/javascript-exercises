const add = (a, b) => {
  return Number(a) + Number(b);
};

const subtract = (a, b) => {
  return Number(a) - Number(b);
};

const sum = (...values) => {
  let total = 0;

  for (const value of values.flat()) {
    total += value;
  }

  return Number(total);
};

const multiply = (...values) => {
  let total = 1;

  for (const value of values.flat()) {
    total *= value;
  }

  return Number(total);
};

const power = (num, pow) => {
  return Math.pow(num, pow);
};

const factorial = (count) => {
  let total = 1;

  for (let i = count; i >= 1; i--) {
    total *= i;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
