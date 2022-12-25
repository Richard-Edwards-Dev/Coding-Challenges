function grow(x){
    let start = 1
     let result = x.reduce(
       (product, element) => element * product,
         start
     );
     return result
   }

   //https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript
// shorter sol'n const grow=x=> x.reduce((a,b) => a*b);