function removeEveryOther(arr){
    let output = []
    arr.forEach((element,index)=>{
      if(!(index % 2)) output.push(element)
    })
    return output
  }

//https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript
//returns every other element of an array. Could have used the filter function