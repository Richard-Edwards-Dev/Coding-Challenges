function getLengthOfMissingArray(arrayOfArrays) {
    arrayOfArrays = (arrayOfArrays || [])
    let lengths = arrayOfArrays.map(el => {if(el) return el.length})
    lengths.sort((a,b)=>a - b)
    if(lengths.includes(0)){
      return 0
    }
    for(let i = lengths[0]; i <= lengths[lengths.length - 1]; i++){
      if(lengths[i-lengths[0]] !== i){
        return i 
      }
    }
    return 0
  }

//https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611/train/javascript