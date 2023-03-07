multiplicationTable = function(size) {
    let table = new Array(size)
    for(let i = 0; i < size; i++){
      table[i] = []
      table[0].push(i+1)
    }
    for(let i = 1; i < size; i++){
      table[i] = table[0].map(n => n * (i + 1))
    }
    return table
  }

//https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript