function sumOfDivided(lst) {
    let divisors = []
    lst.forEach(num => {
      if(num > 1){
      for(let i = 2; i <= num; i++){
        if(num % i === 0 && !divisors.includes(i)){
          divisors.push(i)
        }
      }
    }else if(num < -1){
      for(let i = -2; i >= num; i--){
        if(num % i === 0 && !divisors.includes(Math.abs(i))){
          divisors.push(Math.abs(i))
        }
      }
    }})
    function isPrime(n){
      for(let j = 2; j <= Math.sqrt(n); j++){
        if(n % j === 0) return false;
      }
      return true;
    }
    let primes = divisors.filter(n => isPrime(n)).sort((a,b)=> a - b)
    return primes.map(n =>{
      let sum = 0
      lst.forEach(num => {
        if(num % n === 0) sum += num
      })
      return [n,sum]
    })
  }

  //https://www.codewars.com/kata/54d496788776e49e6b00052f/train/javascript