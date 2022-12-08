const countBits = function(n) {
    return  n.toString(2).split('').reduce((a,b)=> a + +b,0)
  };

  //https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript