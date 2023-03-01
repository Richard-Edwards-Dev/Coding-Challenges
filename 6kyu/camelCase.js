String.prototype.camelCase=function(){
    let arr = this.split(' ')
    arr.forEach((word,index)=>{   
      arr[index] = word.charAt(0).toUpperCase() + word.slice(1)}
    )
    return arr.join('')
  }

  //https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript