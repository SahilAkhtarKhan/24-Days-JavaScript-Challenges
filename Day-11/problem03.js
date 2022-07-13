// Converting one dimensional array into n dimensional array using slice.

function convertArryInOneDimension(array, n) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(array.splice(0, n));
    i = 0;
  }
  if (array.length !== 0) {
    newArr.push(array);
  }
  return newArr;
}
// convertArryInOneDimension(["a", "b", "c", "d"], 2);
let a = convertArryInOneDimension(
  ["a", "b", "c", "d", "e", "f", "g", "h", "i"],
  2
);

console.log(a);
