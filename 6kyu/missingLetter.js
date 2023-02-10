function findMissingLetter(array){
    const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    let missing = array.filter((letter,index)=> array[index+1] !== alpha[alpha.indexOf(letter)+1])
    return alpha[alpha.indexOf(missing[0])+1]
  }

  //https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript