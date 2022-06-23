// Find the maximum character in a array and how many times it appears

function givenArr(input) {
  if (!input) {
    return "No input found";
  }
  let obj = {};
  for (i of input) {
    !obj[i] ? (obj[i] = 1) : obj[i]++;
  }
  console.log(obj);
  let max = 0;
  let maxCharacter = "";
  for (let j in obj) {
    if (obj[j] > max) {
      max = obj[j];
      maxCharacter = j;
    }
  }
  console.log(`${maxCharacter} appears ${max} times.`);
}
givenArr(["Sahil", "Sahil", "Akhtar", "Akhtar", "Akhtar", "khan", "khan"]);
