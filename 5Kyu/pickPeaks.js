function pickPeaks(arr){
    let result = {pos: [], peaks:[]}
    arr.forEach((num,index) =>{
      let i = 1
      let next = arr[index+i]
      while(num === next){
        i++
        next = arr[index+i]
      }
      if(num > arr[index -1] && num > next){
        result.pos.push(index)
        result.peaks.push(num)
    }
    })
      return result
  }

  //https://www.codewars.com/kata/5279f6fe5ab7f447890006a7/train/javascript