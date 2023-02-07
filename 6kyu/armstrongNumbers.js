function narcissistic(value) {
    const splitNumber = String(value).split('')
    return splitNumber.reduce((acc,curr)=> acc + (curr ** splitNumber.length),0) === value
  }
//https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript  