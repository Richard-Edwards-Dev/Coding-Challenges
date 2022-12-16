function getMiddle(s){
    if (s.length % 2 === 0) return s[(s.length/2) - 1] + s[(s.length / 2)]
    else return s[Math.floor((s.length / 2))]
    
  }
  //https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript