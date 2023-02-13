function expandedForm(num) {
    let numArray = String(num).split('').reverse()
    numArray = numArray.map((num,index) => num * 10**(index))
    return numArray.filter(num=> num).reverse().join(' + ')
  }

  //https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript