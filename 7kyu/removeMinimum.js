function removeSmallest(numbers) {
    let least = numbers.indexOf(Math.min(...numbers))
    let output = numbers.slice()
    output.splice(least,1)
    return output
  }

  //https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript
  //Not permitted to affect the original array. Could have found the index of the smallest number and filtered the original
  //array for every element but the smallest based on index

  // let least = numbers.indexOf(Math.min(...numbers))
  // return numbers.filter((element,index) => index !=== least)