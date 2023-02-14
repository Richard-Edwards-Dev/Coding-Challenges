function comp(array1, array2){
    if(!array1 || !array2) return false
    if(!array1.length && !array2.length) return true
    let sorted1 = array1.sort((a,b)=> a - b)
    let sorted2 = array2.sort((a,b)=> a - b)
    for(let i = sorted1.length - 1; i >= 0; i-- ){
      if(sorted1[i]**2 === sorted2[i]){
        sorted1.pop()
        sorted2.pop()
      } else return false
    }
    if(!sorted1.length && !sorted2.length) return true
  }

  //would be better with the every() method would only have to sort array1 map the squares then check for every
  //https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript