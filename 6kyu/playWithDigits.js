function digPow(n, p){
    let arr = n.toString().split('')
    arr.forEach((num,ind) =>{
      arr[ind] = num ** (p)
      p++
    })
    let total = arr.reduce((acc,curr) => acc + curr,0)
    return (total % n) === 0 ? total / n : -1
  }

  //https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript

  //Better 
//   function digPow(n, p) {
//   var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
//   return x % n ? -1 : x / n
// }
