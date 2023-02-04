function persistence(num) {
    let count = 0
   function shrink(num){
    return String(num).split('').reduce((acc,curr)=> acc * +curr, 1)
   }
    while(num > 9){
      count++
      num = shrink(num)
    }
    return count 
  }
  
//https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/solutions/javascript  