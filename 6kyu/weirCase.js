function toWeirdCase(string){
    let words = string.split(' ')
    words = words.map(word => word.split('').map((letter,index)=>{
      return index % 2 === 0 ? letter.toUpperCase() : letter
    }).join(''))
    return words.join(' ')
  }

//https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript