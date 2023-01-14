function descendingOrder(n){
    return Number(String(n).split('').sort((a,b)=>b-a).join(''))
  }

  //https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
  // sort().reverse() would also work