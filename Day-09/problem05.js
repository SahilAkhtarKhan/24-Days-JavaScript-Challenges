// Uppercase of each first letter of a words using map function

function firstLetterUpperCase(x) {
  let word = x
    .toLowerCase()
    .split(" ")
    .map((elem) => {
      return elem[0].toUpperCase() + elem.slice(1);
    });
  console.log(word.join(" "));
}
firstLetterUpperCase("Iam a software engineer");
