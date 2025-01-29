// Write a function that changes the values ​​of two variables

function numbesr(a, b) {
  let temp = a;
  a = b;
  b = temp;

  console.log("change values: ", a, b);
}
numbesr(10, 5);
// Write a function that checks whether a number is odd or even.

function eveOdd(num) {
  if (num % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

eveOdd(6);
eveOdd(3);

// reverse text

function change(textss) {
  return textss.split("").reverse().join("");
}
let c = change("helloworld");
console.log(c);

// 4
function findMinMax(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let a = 1; a <= arr.length; a++) {
    if (arr[a] < min) min = arr[a];
    if (arr[a] > max) max = arr[a];
  }

  return { min, max };
}

console.log(findMinMax([3, 7, 1, 9, 2]));
