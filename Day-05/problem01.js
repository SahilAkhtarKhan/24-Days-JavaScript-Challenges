// To find a first pair from a number array whose sum is zero.
// uding 2 loop operation.

function arr(inputArr) {
  for (let i of inputArr) {
    for (let j of inputArr) {
      if (i + j == 0) {
        return `First pair is: ${i} + ${j} = 0`;
      }
    }
  }
  return;
}
console.log(arr([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]));
console.log(arr([-4, -3, -2, -1, 0, 1, 2, 3]));
console.log(arr([-3, -2, -1, 0, 1, 2, 3, 4, 5]));
