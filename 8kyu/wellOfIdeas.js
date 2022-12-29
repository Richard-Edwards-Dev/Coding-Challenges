function well(x){
    let countGood = 0
    for(let idea in x){
     if(x[idea] === 'good') countGood++
    }
    return countGood > 2 ? 'I smell a series!' : countGood > 0 ? 'Publish!' : 'Fail!'
  }

  //https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript
//Could have filtered for good then checked length