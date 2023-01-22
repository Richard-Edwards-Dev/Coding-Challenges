function sortArray(array) {
    let odds = array.filter(x=> x%2).sort((a,b)=>a-b);
    array.forEach((x,i)=>{
      if(x%2){
        array[i] = odds[0];
        odds.shift();
      }
    })
    return array;
  }

  //https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

  //function sortArray(array) {
//   const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//   return array.map((x) => x % 2 ? odd.shift() : x);
// }