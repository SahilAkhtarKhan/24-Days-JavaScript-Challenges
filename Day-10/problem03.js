// To find the largest elements fro the 2 dimesional array

/** Requirement
 * find largest element from each array element
 * Code for unsorted array
 */

function largestElement2dArray(array) {
  let max = 0;
  if (!Array.isArray(array)) {
    return;
  }
  let newarr = [];
  for (let arrayElement of array) {
    for (let element of arrayElement) {
      if (element > max) {
        max = element;
      }
    }
    newarr.push(max);
  }
  return newarr;
}
let result = largestElement2dArray([
  [1, 2, 3, 4],
  [5, 6, 7, 9],
  [45, 76, 2, 1],
  [89, 90, 87, 9],
]);
console.log(result);
