// Checking all letters of second words should present in first word, in the same order using indexOf without indexing i.e for-of loop

function checkingWordPresent(array) {
  let first = array[0].toLowerCase();
  let second = array[1].toLowerCase();
  for (let elem of second) {
    if (first.indexOf(elem) == -1) {
      return false;
    }
  }
  return true;
}
let a = checkingWordPresent(["Sahil", "hia"]);
console.log(a);
