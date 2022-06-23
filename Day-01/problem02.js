/**
 * Remove Duplicate characters from array of element and find the count of an elements using set
 */

function duplicateSet(data) {
  let mySet001 = new Set(data);
  mySet001.add("Khan");
  let mySet002 = Array.from(mySet001);
  return mySet002;
}
console.log(
  duplicateSet(["Sahil", "Sahil", "Sahil", "Akhtar", "Akhtar", "Akhtar"])
);
