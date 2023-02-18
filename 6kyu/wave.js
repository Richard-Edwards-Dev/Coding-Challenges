function wave(str){
    let array = str.split("")
    let result = []
    array.forEach((letter,index,array) =>{
      if(letter !== ' '){
        array[index] = letter.toUpperCase()
        result.push(array.join(''))
        array[index] = letter.toLowerCase()
      }
    })
    return result
  }

  //https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript