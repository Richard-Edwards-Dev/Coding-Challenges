function adjacentElementsProduct(array) {
    let max = -Infinity 
    array.forEach((number,index)=>{
      let product = number * array[index + 1] 
      if(product > max){
        max = product
      }
    })
    return max
  }

  //https://www.codewars.com/kata/5a4138acf28b82aa43000117/train/javascript