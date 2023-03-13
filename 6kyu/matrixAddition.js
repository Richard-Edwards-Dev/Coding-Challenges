function matrixAddition(a, b){
    let result = []
    a.forEach((arr,n) => {
      result.push(arr.map((el,m)=> el + b[n][m]))
    })
    return result
  }

//https://www.codewars.com/kata/526233aefd4764272800036f/train/javascript