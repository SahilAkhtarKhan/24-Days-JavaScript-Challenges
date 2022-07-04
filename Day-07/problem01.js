// Fibonacci Series (0,1,1,2,3,5,8,13....) where keeping in array

let arr = [0, 1];
for (let i = 1; i < 5; i++) {
  arr.push(arr[i] + arr[i - 1]);
}
console.log(arr);
