// To find the index of an element from an array

// [1, 2, 3, 4, 5, 6, 7, 8, 9];

function findIndex(array, n) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == n) {
      return i;
    } else {
      return "Value not found";
    }
  }
  return i;
}
console.log(findIndex([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));

// Without using loop

/**
 * Binary searching... for sorted array.
 * @param {Given array} array
 * @param {*Index to be found of} n
 * Divide array by 2.
 * Declare variable min=0.
 * Check the answer is greater or less than the req. value.
 * If greater then -1.
 * If lesser than +1.
 */
function findIndexElem(arr, x) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    midIndex = Math.floor((min + max) / 2);
    if (arr[midIndex] > x) {
      midIndex - 1;
    } else if (arr[midIndex] < x) {
      midIndex + 1;
    } else {
      console.log(arr[midIndex]);
    }
  }
}
findIndexElem([1, 3, 4, 5, 11, 18, 25, 28, 31], 25);
