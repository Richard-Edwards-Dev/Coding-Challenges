function points(games) {
    let points = 0
    games.forEach((score,index)=>  +score[0] > +score[2] ? points += 3 : +score[0] === +score[2] ? points += 1 : points += 0)
    return points
  }

  //https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

  //reduce would be shorter 
//   const points=games=>games.reduce((output,current)=>{
//     return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
//   },0)