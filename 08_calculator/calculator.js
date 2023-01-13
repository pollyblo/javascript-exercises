const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(array) {
	return array.reduce((acc, cur) => acc + cur, 0);
};

const multiply = function(array) {
  return array.reduce((acc, cur) => acc * cur);
};

const power = function(num, exp) {
	return num ** exp;
};

const factorial = function(num) {
  if (num <= 1) return 1;
	return num * factorial(num - 1);
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
