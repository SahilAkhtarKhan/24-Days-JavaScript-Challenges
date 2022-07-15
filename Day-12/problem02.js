// Checking all letters of second words should present in first word, in the same order using indexOf with indexing

function checkingWordPresent(arr) {
  var first = arr[0].toLowerCase();
  var second = arr[1].toLowerCase();
  for (var i = 0; i < second.length; i++) {
    if (first.indexOf(second) == -1) {
      return false;
    }
  }
  return true;
}
console.log(checkingWordPresent(["Sahil", "eh"]));
