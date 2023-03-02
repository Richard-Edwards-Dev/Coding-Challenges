var solution = function(firstArray, secondArray) {
    let squares = firstArray.map((number,index) => (number - secondArray[index])**2)
    return squares.reduce((acc,curr)=>acc + curr, 0) / firstArray.length
  }

//https://www.codewars.com/kata/51edd51599a189fe7f000015/solutions/javascript