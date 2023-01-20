function findEvenIndex(arr){
    let evenIndex
    arr.forEach((num,ind,wholeArr)=>{
      let leftSum = wholeArr.slice(0,ind).reduce((acc,curr)=>acc+curr,0)
      let rightSum = wholeArr.slice(ind+1,wholeArr.length).reduce((acc,curr)=>acc+curr,0)
      if(leftSum === rightSum && evenIndex === undefined){
        evenIndex = ind
      }
    })
    return evenIndex !== undefined? evenIndex : -1
  }

//didn't want the return being re assigned [0,0,0,0,0] should return 0 not 4
//https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

//Like this solution better. Rather than calculating both sides of the array repeatedly just add and subtract
// {
//     let left = 0;
//     let right = arr.reduce((s,n) => s + n, 0);
//     for (let i = 0; i < arr.length; i++) {
//       right -= arr[i];
//       if (left === right) return i;
//       left += arr[i];
//     }
//     return -1;
//   }