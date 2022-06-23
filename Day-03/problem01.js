// To check the string or number is palindrome or not( ex: 121,madam,anna) using reverse method.

/** Using reverse
 *
 * reverse the string.
 * check with original string
 */

let palindrome = (str) => {
  let isPalindrome = str.split("").reverse().join("");
  console.log(isPalindrome === str);
};
palindrome("abbac");

/** Without using reverse method.
 *
 * Apply for of loop
 * reverse the string
 * compare with original string
 */

(function (str) {
  let check = "";
  for (let i of str) {
    check = i + check;
  }
  console.log(check === str);
})("abbazz");
