// Find factorial of user input number

/**
 * @param {Given input} input
 * create new variable.
 * Apply reverse loop.
 * Store input value in new variable by multiply.
 * @returns new variable
 */

let factorial = (input) => {
  let store = 1;
  for (let i = input; i >= 1; i--) {
    // console.log(i);
    store = store * i;
  }
  return store;
};
let n = factorial(10);
console.log(n);
