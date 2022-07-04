// Find the missing number from an array

function missingNumber(data) {
  for (let i = 0; i < data.length; i++) {
    if (!(data[i] + 1 == data[i + 1])) {
      return data[i] + 1;
    }
  }
}
console.log(missingNumber([1, 2, 3, 4, 5, 7, 8, 9]));
