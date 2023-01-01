const binaryArrayToNumber = arr => {
    let sum = 0
    for(let i = 0; i < arr.length; i++){
      if (arr[i]) sum += 2 ** (arr.length -1 - i)
    }
    return sum
  };
//https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript
//parseInt can convert between different bases. shorter:
//const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);