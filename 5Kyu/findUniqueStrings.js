function findUniq(arr) {
    let hash = {}
    let result
    arr.forEach(word=>{
      for(let letter of word){
        letter = letter.toLowerCase()
        hash[letter] ? hash[letter]++ : hash[letter] = 1
      }
    })
    let lowest = Math.min(...Object.values(hash))
    let leastLetter = Object.keys(hash).find(key => hash[key] === lowest);
    arr.forEach((word,index) =>{
      word = word.toLowerCase()
      if(word.includes(leastLetter)) result = arr[index]
    })
    return result
  }

//https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3/train/javascript