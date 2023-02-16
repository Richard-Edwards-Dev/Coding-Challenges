function inArray(array1,array2){
    let r = []
    for (let word1 of array1){
      for(let word2 of array2){
        if(word2.includes(word1)){
          r.push(word1)
          break
        }
      }
    }      
    return r.sort()
  }

  //https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript