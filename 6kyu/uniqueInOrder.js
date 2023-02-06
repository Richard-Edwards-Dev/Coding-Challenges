var uniqueInOrder=function(iterable){
    if(typeof(iterable)!== 'object') iterable = iterable.split('')
    return iterable.filter((element,index)=>{
      if(iterable[index+1] !== element) return element
    })
  }

  //https://www.codewars.com/kata/54e6533c92449cc251001667/solutions/javascript