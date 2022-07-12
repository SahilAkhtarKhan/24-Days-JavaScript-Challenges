// To check ending of the string with given character/s using custom

function checkStringEnd(string, n) {
  return string.substr(-1) === n;
}
let a = checkStringEnd("sahil", "l");
console.log(a);
