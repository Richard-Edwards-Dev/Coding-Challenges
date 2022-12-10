function digitalRoot(n) {
    while(n>9){
    n = String(n).split('').reduce((acc,curr)=>acc + +curr,0)
      }
    return n
  }

  //https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript