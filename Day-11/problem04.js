// To find only truthy values from an array.

function findTruthyValue(myValue) {
  let truth = [];
  for (let elem of myValue) {
    if (elem) {
      truth.push(elem);
    }
  }
  console.log(truth);
}
findTruthyValue(["priya", 0, "", false, null, undefined, "ate", NaN, 9]);
