function duplicateCount(text){
    let duplicates = {}
    text.toLowerCase().split('').forEach((letter,index,array) =>{
      if(array.indexOf(letter) !== array.lastIndexOf(letter)){
        duplicates[letter] = 1
    }})
    return Object.keys(duplicates).length
  }
//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript