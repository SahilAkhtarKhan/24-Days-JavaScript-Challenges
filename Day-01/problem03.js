// Remove Duplicate characters from array of element using filter

/**
 * @param {Receiving string} data
 * Declare empty array.
 * Apply filter function.
 * Here 'word' is iterating variable at every index.
 * Check if 'zee' variable already have or not the current index.
 * Then push.
 * @returns
 */

function removeDuplicate(data) {
  //   data.split(" ");
  //   console.log(data);
  let zee = [];
  data.filter((word) => {
    if (!zee.includes(word)) {
      zee.push(word);
    }
    return;
  });
  return zee;
}
console.log(
  removeDuplicate(["s", "a", "h", "i", "l", "a", "k", "h", "t", "a", "r"])
);
