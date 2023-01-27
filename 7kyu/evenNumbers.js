function evenNumbers(array, number) {
    let evens = array.filter(integer => integer % 2 === 0)
    return evens.slice(-number)
  }

  //https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/train/javascript