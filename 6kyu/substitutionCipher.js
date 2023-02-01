function SubstitutionCipher(abc1, abc2) {
  
    this.encode = function (str) {
      str = str.split('')
        str.forEach((letter,index)=>{
        if(abc1.includes(letter)){
          str[index] = abc2[abc1.indexOf(letter)]
        }
      })
      return str.join('')
    }
    this.decode = function (str) {
          str = str.split('')
        str.forEach((letter,index)=>{
        if(abc1.includes(letter)){
          str[index] = abc1[abc2.indexOf(letter)]
        }
      })
      return str.join('')
    }
  }

//https://www.codewars.com/kata/52eb114b2d55f0e69800078d/train/javascript