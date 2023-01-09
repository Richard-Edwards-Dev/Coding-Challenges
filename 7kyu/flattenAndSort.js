
function flattenAndSort(array) {
    let soln = []
    for(let number of array){
      soln.push(...number) 
    }
    return soln.sort((a,b)=>a-b);
  }

  //loop unnecessary
  //https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/javascript
  //forgot about the flat method, whoops
  // better soln const flattenAndSort = (array) => array.flat().sort((a, b) => a-b);