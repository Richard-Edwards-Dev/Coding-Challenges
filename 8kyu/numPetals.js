function howMuchILoveYou(nbPetals) {
    while(nbPetals > 6){
      nbPetals -= 6
    } 
    switch(nbPetals){
      case 1:
        return "I love you"
      case 2:
        return "a little"
      case 3:
       return "a lot"
      case 4:
        return "passionately"
      case 5:
        return "madly"
      case 6:
        return "not at all"
    }
}


//https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/javascript

//Array would be more clear

// const phrases = [
//     'I love you',
//     'a little',
//     'a lot',
//     'passionately',
//     'madly',
//     'not at all',
// ]

// function howMuchILoveYou(n) {
//      return phrases[(n - 1) % phrases.length] 
// }

