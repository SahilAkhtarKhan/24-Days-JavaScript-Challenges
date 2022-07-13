// To find only truthy values from an array.

function findTruthyValue(myValue) {
  return myValue.filter((elem) => {
    return elem;
  });
}
let a = findTruthyValue([
  "priya",
  0,
  "",
  false,
  null,
  undefined,
  "ate",
  NaN,
  9,
]);
console.log(a);
