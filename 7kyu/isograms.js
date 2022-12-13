function isIsogram(str){
    let result = true
    let word = str.toLowerCase().split('');
    word.forEach(letter =>{
      if (word.indexOf(letter) !== word.lastIndexOf(letter)){
        result = false
      }
    })
    return result
  }

  //return new Set(str.toUpperCase()).size == str.length;
  //much more elegant solution. Creates a new set out of the string which would reject duplicate
  //value and then checks to see if the size of the set is equal to the length of the word.

  //https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript