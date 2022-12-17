function countPositivesSumNegatives(input) {
    let output = []
    let positiveCount = 0
    let negativeSum = 0
    if (input == null || input.length === 0) return output;
    input.forEach((element,index)=>{
      if (element > 0){
        positiveCount++
      }
      else if (element < 0){
        negativeSum += element;}
    })
    output[0] = positiveCount
    output[1] = negativeSum
    return output
  }
  //https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript