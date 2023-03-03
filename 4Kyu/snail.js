snail = function(array) {
    let result = []
    if (array.length === 1) return array[0]
    while(array.length > 0){
      result.push(array.shift())
      if(array.length > 0){
      array.forEach(a => result.push(a.pop()))
        }
      if(array.length > 0){
      let last = array.pop()
      result.push(last.reverse())
      }
      if(array.length > 0){
        let temp = []
        array.forEach(a => temp.push(a.shift()))
        result.push(temp.reverse())
      }
      
    }
    return result.flat()
  }

//https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript