function checkExam(array1, array2) {
    let score = 0
    array2.forEach((answer,question)=>{ if(answer !== '') answer === array1[question] ? score += 4 : score -= 1})
    return score > 0 ? score : 0
  }

//https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/javascript