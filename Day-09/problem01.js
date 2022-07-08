// To find unique is from 2 arrays and keep into one array.

function findUniqueElements(arr01, arr02) {
  let newArray = [...arr01, ...arr02];
  for (let elem of newArray) {
    for (let i = elem + 1; i < newArray.length; i++) {
      if (elem == newArray[i]) {
        newArray.splice(i, 1);
        i = elem + 1;
      }
    }
  }
  console.log(newArray);
}
findUniqueElements([1, 2, 3, 4, 4], [2, 3, 4, 5, 6]);
