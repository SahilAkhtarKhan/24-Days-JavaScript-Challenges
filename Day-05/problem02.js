// To find a first pair whose sum is zero using indexing.

function arr(inputArr) {
  let start = 0;
  let end = inputArr.length - 1;
  for (let i = start + 1; i < inputArr.length; i++) {
    if (inputArr[start] + inputArr[i] == 0) {
      return `First pair is : ${inputArr[i]}, ${inputArr[start]}`;
    }
    if (inputArr[i] == inputArr[end]) {
      start++;
      i = start + 1;
    }
  }
}
// arr([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]);
// console.log(arr([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4]));
console.log(arr([-3, -2, -1, 0, 1, 4]));
