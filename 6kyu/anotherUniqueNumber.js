function findUnique(numbers) {
    let hash = {}
    for (let number of numbers){
      if(!hash[number]){
        hash[number] = 1
      } else hash[number] += 1
    }
   for(let number of numbers){
     if(hash[number] === 1){
       return number
     }
   }
}

//wanted to use a hash table. Arrays can get up to 10M length.
//https://www.codewars.com/kata/55f81f9aa51f9b72a200002f/train/javascript