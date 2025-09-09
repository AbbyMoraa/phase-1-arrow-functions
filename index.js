// 1. Function expression
const divide = function() {
  return 2000 / 100;
};

// 2. Arrow function (one parameter)
const square = (x) => x * x;

// 3. Arrow function (two parameters)
const add = (a, b) => a + b;

// Export for tests
module.exports = {
  divide,
  square,
  add
};

// -----------------------------
// Console.log test examples
// -----------------------------
console.log(divide());     // 20
console.log(square(4));    // 16
console.log(add(3, 5));    // 8
