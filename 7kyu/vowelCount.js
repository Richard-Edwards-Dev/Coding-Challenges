function getCount(str) {
    let count = 0
    str.split('').forEach((x)=>{
      if("aeiou".includes(x)) count++})
    return count
  }

//https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript