function gimme (triplet) {
    let arr = triplet.slice()
    let middle = arr.sort((a,b)=>a - b)[1]
    return triplet.indexOf(middle)
  }

  //https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript
  //could reduce to one line but going for clarity