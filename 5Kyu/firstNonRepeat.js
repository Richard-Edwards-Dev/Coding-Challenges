function firstNonRepeatingLetter(s) {
    let str = s.toLowerCase()
    for(let i = 0; i < str.length; i++){
      if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
        return s[i]
      }
    }
     return ''
   }

//https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript