var capitals = function (word) {
    let output = []
      word.split('').forEach((letter,index) =>{
      if(letter.toUpperCase() === letter) output.push(index)})
    return output
  };

  //https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript