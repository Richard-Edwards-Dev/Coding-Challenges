function fakeBin(x){
    let soln = []
    x.split('').forEach((e,i)=> e > 4 ? soln[i] = 1 : soln[i] = 0)
    return soln.join('')
}

//https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
