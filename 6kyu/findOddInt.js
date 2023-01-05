function findOdd(A) {
    while(A.length > 1){ 
     A.forEach((e,i) => {
       let nextElement = A.indexOf(e,i+1)
       if( nextElement !== -1){
         A.splice(nextElement,1)
         A.splice(i,1)
       }
     })
     }
     return A[0];
   }

//https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

//Well this is embarassing...
//best sol'n      const findOdd = (xs) => xs.reduce((a, b) => a ^ b);