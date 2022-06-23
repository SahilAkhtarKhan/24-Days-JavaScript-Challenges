/** String reverse without reversing of individual words
 *  (Array of elements can be reverse with reverse() method but for
 *  string it is won't possible so required to split and then join.
 */

// Expected Output : yM eman si lihas

function stringReverse(str) {
  let aaa = "";
  let zee = [];
  str = str.split(" "); //['My', 'name', 'is', 'Sahil']
  for (let j = str.length - 1; j >= 0; j--) {
    aaa += str[j];
    // console.log(aaa);
  } // aaa =  SahilisnameMy
  for (let i = 0; i < aaa.length; i++) {
    // console.log(i);

    if (aaa[i] != "") {
      zee.unshift(aaa[i]);
    }
  }
  return zee;
}
console.log(stringReverse("My name is Sahil"));
// ['y', 'M', 'e', 'm', 'a', 'n', 's', 'i', 'l', 'i', 'h', 'a', 'S']
