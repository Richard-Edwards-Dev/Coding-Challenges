function findShort(s){
    let shortestWord = s.length
    s.split(' ').forEach((word)=>{
      if (word.length < shortestWord) shortestWord = word.length
    })
    return shortestWord
  }

  //https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
  //Could be shorter:

  //function findShort(s){
  //return Math.min.apply(null, s.split(' ').map(w => w.length));
//}

