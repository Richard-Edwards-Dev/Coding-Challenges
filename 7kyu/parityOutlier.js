function findOutlier(integers){
    let odds = []
    let evens = []
    for(let number of integers) {
      number % 2 === 0 ? odds.push(number) : evens.push(number)
      if((odds.length + evens.length > 2) && (odds.length && evens.length)){
        break;
      }
    }
    return odds.length === 1 ? odds[0] : evens[0]
  }

  //https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript