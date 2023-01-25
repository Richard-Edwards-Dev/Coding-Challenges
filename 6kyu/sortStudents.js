function mostMoney(students) {
    for(let student of students){
      student.total = (student.fives * 5) + (student.tens * 10) + (student.twenties * 20)
    }
    students.sort((a,b)=>{
      return a.total<b.total ? 1 : a.total>b.total ? -1 : 0
    })
    if(students.length > 1){
    return students[0].total > students[1].total ? students[0].name : 'all'
    } else return students[0].name
  }

  //https://www.codewars.com/kata/528d36d7cc451cd7e4000339/train/javascript