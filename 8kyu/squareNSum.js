function squareSum(numbers){
    let sum = 0
    numbers.forEach((element)=>{
      sum += element**2
    })
    return sum
  }

//https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
//.reduce method would be shorter

// function squareSum(numbers){
//   return numbers.reduce(function(sum, n){
//     return (n*n) + sum;
//   }, 0)
// }