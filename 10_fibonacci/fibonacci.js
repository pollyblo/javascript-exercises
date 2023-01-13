const fibonacci = function (n) {
   const N = Number(n);
   if (N < 0) return 'OOPS';
   else if (N === 1) return 1;
   else if (N === 0) return 0;
   else return fibonacci(n - 1) + fibonacci(n - 2);
};

// Do not edit below this line
module.exports = fibonacci;
