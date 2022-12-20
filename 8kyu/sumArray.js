// Sum Numbers
function sum (numbers) {
    let sum = 0
    for(let i = 0; i < numbers.length; i++){
      sum += numbers[i]
    }
  return sum
};

//https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript
//
//optimal solution:

// function sum(numbers) {
//     return numbers.reduce((a, b) => a + b, 0);
// }