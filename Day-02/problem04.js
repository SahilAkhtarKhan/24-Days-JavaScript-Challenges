// Check if a string is an Anagram

// LISTEN = SILENT

function anagram() {
  let data01 = "LISTEN";
  let data02 = "SILENT";
  let a = data01.split("").sort();
  //    ['E', 'I', 'L', 'N', 'S', 'T']
  let b = data02.split("").sort();
  //    ['E', 'I', 'L', 'N', 'S', 'T']
  //   console.log(a, b);
  if (a == b) {
    return true;
  }
  return;
}
console.log(anagram());
