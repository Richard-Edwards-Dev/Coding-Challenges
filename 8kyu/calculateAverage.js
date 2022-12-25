function findAverage(array) {
    let sum = 0
    array.forEach((element)=>{
      sum += element
    })
    return array.length ? (sum / array.length) : 0
  }

  //https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
//let find_average = (array) => {  
//   return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
// }