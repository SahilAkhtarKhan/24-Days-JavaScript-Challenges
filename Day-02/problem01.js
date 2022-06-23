// String reverse with reversing of individual words

function stringReverse(data) {
  //   data = data.split(" ");
  //   console.log(data); // ['Iam', 'a', 'software', 'engineer']
  let zee = "";
  for (let i of data) {
    zee = i + zee;
  }
  return zee;
}
console.log(stringReverse("Iam a software engineer"));
