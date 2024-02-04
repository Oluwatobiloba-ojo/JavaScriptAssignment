const arr = [1, 2, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let evenValue = arr.filter((element) => element % 2 === 0);

let squareValue = arr.map((element) => element * element);

arr.forEach((x) => console.log(x * 2));

console.log(evenValue);
console.log(squareValue);
