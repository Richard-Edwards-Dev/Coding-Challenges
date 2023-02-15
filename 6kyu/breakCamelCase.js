function solution(string) {
    let arr = string.split('')
    arr.forEach((letter,index) =>{
      if(letter.toUpperCase() === letter){
        arr[index] = ` ${letter}`
    }})
    return arr.join("")
  }

  //https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript