function pascalsTriangle(n) {
    let result = [1]
    for(let i = 2; i <= n; i++){
      let arr = new Array(i)
      arr[0] = 1
      arr[arr.length - 1] = 1
      for(let j = 0; j < arr.length; j++){
        if(!arr[j]){
         arr[j] = (result[i - 2][j-1] + result[i - 2][j])
      }}
      result.push(arr)
    }
    return result.flat()
  }

//https://www.codewars.com/kata/5226eb40316b56c8d500030f/train/javascript