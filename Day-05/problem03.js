// To find the largest pair of the 2 elements using indexing with unsorted elements

function arr(inputArr) {
  let max = 0;
  let resArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    for (let j = i + 1; j < inputArr.length; j++) {
      if (inputArr[i] + inputArr[j] > max) {
        max = inputArr[i] + inputArr[j];
        resArr.splice(0, 1);
        resArr.push([inputArr[i], inputArr[j]]);
      }
    }
  }
  return resArr;
}
console.log(arr([9, 7, 8, 4, 5, 6, 1, 2, 3]));
