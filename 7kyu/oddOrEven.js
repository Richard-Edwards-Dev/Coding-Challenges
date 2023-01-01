function oddOrEven(array) {
    let sum = array.reduce((acc,curr)=>acc+curr,0)
    return sum % 2 ? 'odd' : 'even'
 }

 //https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript