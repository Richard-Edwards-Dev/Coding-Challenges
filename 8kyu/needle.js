function findNeedle(haystack) {
    let found = 0
    haystack.forEach((element,index) =>{
      if(element === 'needle') found = index
    })
    return `found the needle at position ${found}`
  }
  https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript