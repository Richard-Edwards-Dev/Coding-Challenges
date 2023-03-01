function encrypt(text, n) {
    if(!n || !text) return text
    let result = text
    for(let i = 1; i <= n; i++){
      let arr = result.split('') 
      let evens = ''
      let odds = ''
      arr.forEach((element,index) =>{
        if(index % 2 === 0){
          evens += element
        } else {
          odds += element
        }
      })
      result = odds + evens
    }
    return result
  }
  
  function decrypt(encryptedText, n) {
    if(!n || !encryptedText) return encryptedText
    let result = encryptedText
    for(let i = 1; i <= n; i++){ 
      let start = result.slice(0,Math.floor(encryptedText.length/2)).split('')
      let end = result.slice(Math.floor(encryptedText.length/2)).split('')
      result = ''
      for(let i = 0; i < encryptedText.length; i++){
        if(i % 2 === 0){
          result += end.shift()
        } else {
          result += start.shift()
        }
      }
    }
    return result
  }

  //https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript