// To find a first pair whose sum is zero using indexing.
function arr(inputArr) {
  let end = inputArr.length - 1;
  for (let i = 0; i < inputArr.length; i++) {
    // console.log("LN05", i);
    if (inputArr[i] + end == 0) {
      return `${inputArr[i]}, ${inputArr[end]}`;
    } else {
      end--;
    }
  }
  return;
}
console.log("LN14", arr([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]));
console.log("LN15", arr([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4]));
console.log("LN16", arr([-3, -2, -1, 0, 1, 2, 3, 4]));
