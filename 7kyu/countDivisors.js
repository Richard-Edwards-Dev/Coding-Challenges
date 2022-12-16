function getDivisorsCnt(n){
    let divisors = 0
      for(let i = 1; i <= n; i++){
        if (n % i === 0) divisors++
      }
    return divisors
  }
  //https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript