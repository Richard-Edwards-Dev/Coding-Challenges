function capitalize(s){
    let result = ['','']
    let word = s.split('').forEach((letter,index)=>{
      if(index % 2 === 0){
        result[0] += letter.toUpperCase()
        result[1] += letter
      } else{ 
        result[0] += letter
        result[1] += letter.toUpperCase()
      }      
    })
    return result
  };

  //https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript