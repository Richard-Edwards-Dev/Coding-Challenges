function smallEnough(a, limit){
    return a.filter((x) => x > limit).length ? false : true
  }

//https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript

//return Math.max(...a) <= limit is more concise
