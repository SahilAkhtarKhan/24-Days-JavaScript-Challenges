// To check if given number is prime or not
function checkPrimeNumber(num) {
  if (num < 1) {
    return "Invalid Input!";
  }
  for (let i = 2; i < 23; i++) {
    // console.log(i);
    if (num % i == 0) {
      return "Input in not a prime number";
    } if() {
      return "Input is a prime number";
    }
  }
}
console.log(checkPrimeNumber(21));
