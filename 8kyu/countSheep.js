function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(element=>element === true).length
  }

  //https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript
  //could replace (element=>element === true) with Boolean