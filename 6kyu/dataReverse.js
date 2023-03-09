function dataReverse(data) {
    let result = []
    while(data.length > 0){
      result.unshift(...data.splice(0,8))
    }
    return result
  }

//https://www.codewars.com/kata/569d488d61b812a0f7000015/train/javascript