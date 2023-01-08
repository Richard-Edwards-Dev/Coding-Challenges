function rowWeights(array){
    let weights = [0,0]
    array.forEach( (el,ind) => {ind % 2 ? weights[1] += el : weights[0] += el} )
    return weights
  }

  //https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript