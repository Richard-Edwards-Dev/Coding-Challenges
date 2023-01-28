function order(words){
    let array = words.split(' ')
    let sorted = []
    for(let i = 1; i <= array.length; i++){
      array.forEach(word => {if(word.includes(i)){
          sorted.push(word)
       }})
    }
    return sorted.join(' ')
  }

  //https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript