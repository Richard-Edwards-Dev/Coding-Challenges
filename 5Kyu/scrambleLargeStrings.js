function scramble(str1, str2) {
    let hash1 = {}
    let hash2 = {}
    for(let i = 0; i < str2.length; i++){
     let letter = str2.charAt(i)
     if(!str1.includes(letter)){
       return false }
     else{
        hash2[letter] ? hash2[letter]++ : hash2[letter] = 1
    }
      }
    for(let j = 0; j< str1.length; j++){
      let letter = str1.charAt(j)
      hash1[letter] ? hash1[letter]++ : hash1[letter] = 1
    }
    for(let letter in hash2){
      if(hash1[letter] < hash2[letter]){
        return false
      }
    }
    return true
  }

//https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript