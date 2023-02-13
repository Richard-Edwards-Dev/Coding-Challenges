function longestConsec(strarr, k) {
    let lengths = strarr.map((str,index) => str.length )
    let largest = 0
    let largestIndex
    lengths.forEach((word,index) =>{
      let size = lengths.slice(index,index+k).reduce((a,b)=>a + +b, 0)
      if(size > largest){
        largest = size
        largestIndex = index
      }
    })
  return k > 0 && k <= strarr.length ? strarr.slice(largestIndex, largestIndex + k).join('') : ''
}