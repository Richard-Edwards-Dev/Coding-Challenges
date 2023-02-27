function moveZeros(arr) {
    let zeroes = []
    let notZeroes = []
    arr.forEach((element,index) => {
      if(element === 0){
        zeroes.push(0)
      } else {
        notZeroes.push(element)
      }
    })
    return notZeroes.concat(zeroes)
  }

// function moveZeros(arr) {
//     return [
//         ...arr.filter(n=> n !== 0),
//         ...arr.filter(n=> n === 0)
//       ]
//     }

//https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript