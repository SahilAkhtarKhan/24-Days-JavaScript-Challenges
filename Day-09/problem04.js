// Uppercase of each first letter of a words

function firstLetterUpperCase(data) {
  let word = data.toLowerCase().split(" ");
  for (let i = 0; i < word.length; i++) {
    word[i] = word[i][0].toUpperCase() + word[i].slice(1);
  }
  console.log(word.join(" "));
}
firstLetterUpperCase("Hi this is sahil here");
