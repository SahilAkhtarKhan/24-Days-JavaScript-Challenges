// Finding a missing elements in an array and then add with existing elements. (-1 means if elements not found then it will return always -1 as per rule)

let arr = (input) => {
  let newInput = [];
  for (let i = 1; i < 8; i++) {
    if (input.indexOf(i) == -1) {
      newInput.push(i);
    }
  }
  input = [...input, ...newInput].sort();
  console.log(input);
};
arr([1, 2, 3, 5, 6, 8]);
