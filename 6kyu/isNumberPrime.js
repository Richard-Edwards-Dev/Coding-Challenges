function isPrime(num) {
    if (num < 2) return false
    let limit = Math.sqrt(num)
    for(let i = 2; i <= limit; i++){
      if(num % i === 0) return false
    }
    return true
  }

  //https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript