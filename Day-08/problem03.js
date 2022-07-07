// To check if given number is prime or not
function checkPrimeNumber(num) {
  if (num <= 1) {
    return "Invalid Input!";
  }
  for (let i = 2; i * i < 23; i++) {
    // console.log(i);
    if (num % i === 0) {
      return "Input is not a prime number";
    }
    return "Input is a prime number";
  }
}
console.log(checkPrimeNumber(23));
