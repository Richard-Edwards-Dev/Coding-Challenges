decodeMorse = function(morseCode){
    let decoded = []
    let words = morseCode.trim().split('   ')
    for(let i = 0; i < words.length; i++){
      let letters = words[i].split(' ')
      for(let letter of letters){
        letter = (MORSE_CODE[letter]) 
        decoded[i] ? decoded[i] += letter : decoded[i] = letter
      }  
    }
    return decoded.join(' ')
  }

  //https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript
  // could have been better done with map