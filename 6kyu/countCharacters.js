function count (string) {  
    let hash = {}
    for(let i = 0; i < string.length; i++){
      let letter = string[i]
      hash[letter] ? hash[letter]++ : hash[letter] = 1
    }
      return hash
  }

//https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript