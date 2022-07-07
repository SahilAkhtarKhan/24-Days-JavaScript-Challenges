// Fibonacci Series (0,1,1,2,3,5,8,13....)

let prev = 0;
let curr = 1;
for (let i = 0; i < 7; i++) {
  let temp = prev + curr; // 0+1->1, 1+1->2
  console.log(prev); // 0,1
  prev = curr; // 0->1
  curr = temp; // 1->1
}
