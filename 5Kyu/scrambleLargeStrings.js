function scramble(str1, str2) {
    let hash1 = {}
    let hash2 = {}
    for(let i = 0; i < str2.length; i++){
     let letter = str2.charAt(i)
     if(!str1.includes(letter)){
       return false }
     else{
        hash1[letter] ? hash1[letter]++ : hash1[letter] = 1
    }
      }
    for(let j = 0; j< str1.length; j++){
      let letter = str1.charAt(j)
      hash2[letter] ? hash2[letter]++ : hash2[letter] = 1
    }
    for(let letter in hash1){
      if(hash2[letter] < hash1[letter]){
        return false
      }
    }
    return true
  }