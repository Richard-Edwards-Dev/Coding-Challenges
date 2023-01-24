function countDevelopers(list) {
    let count = 0
    for(let developer of list){
      if(developer.continent === 'Europe' && developer.language === 'JavaScript') count++;
    }
    return count
  }

 // https://www.codewars.com/kata/582746fa14b3892727000c4f/train/javascript
 // better:
//  function countDevelopers(list) {
//     return list.filter(x=>x.continent=='Europe'&&x.language=='JavaScript').length
//   }