// Sorting of a number array with or without inbuilt methods

// By using sort method

// function sortNumber(data) {
//   data.sort();
//   console.log(data);
// }
// sortNumber([2, 5, 6, 1, 3, 4]);

// without using sort method

function sortNumber(data) {
  let temp;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > data[i + 1]) {
      temp = data[i];
      data[i] = data[i + 1];
      data[i + 1] = temp;
      i = -1;
    }
  }
  console.log(data);
}
sortNumber([2, 5, 6, 1, 3, 4]);
