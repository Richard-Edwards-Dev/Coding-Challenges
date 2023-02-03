function isPangram(string){
    let alpha = 'abcdefghijlkmnopqrtuvwxyz'.split('')
    let sentence = string.toLowerCase().split('')
    sentence.forEach(letter =>{
      if(alpha.indexOf(letter) !== -1){
         alpha.splice(alpha.indexOf(letter),1)
         }
      })
    return alpha.length === 0 ? true : false
  }

  //https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

  //use .every next time