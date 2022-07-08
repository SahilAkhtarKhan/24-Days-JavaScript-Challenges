// Find first duplicate element from an array

function firstDuplicateElement(arr) {
  let start = 0;
  for (let i = start + 1; i < arr.length; i++) {
    if (arr[start] == arr[i]) {
      return arr[start];
    }
    if (arr[i] == arr[arr.length - 1]) {
      start++;
      i = start + 1;
      i--;
    }
  }
}
let res = firstDuplicateElement([1, 2, 3, 4, 4, 5, 5, 6, 7, 8]);
console.log(res);
