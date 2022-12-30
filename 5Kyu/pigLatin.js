function pigIt(str){
    let words = str.split(' ')
    words.forEach((word,i)=>{
     if(!'?!'.includes(word)){ 
      word = word.split('')
      word.push(word.shift()+'ay')
      words[i] = word.join('')
     }  
    })
    return words.join(' ')
  }

  //https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
  //Avoiding RegEx