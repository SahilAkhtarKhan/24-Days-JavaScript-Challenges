// Remove Duplicate characters from String

/**
 * @param {Given parameter for string} str
 * Assign 0th index value in res variable.
 * Apply loop
 * Check the current value is present in res variable or not.
 * If not present then add in res.
 * @returns
 */

//  Input : "sahilakhtarkhan"
//  Expected Output : sahilktrn

function removeDuplicate(str) {
  let res = str[0];
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);
    if (!res.includes(str[i])) {
      res += str[i];
    }
  }
  return res;
}
console.log(removeDuplicate("sahilakhtarkhan"));
