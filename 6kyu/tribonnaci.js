function tribonacci(signature,n){
  while(signature.length < n){
    let length = signature.length
    signature.push(signature[length - 1] + signature[length - 2] + signature[length -3])
  }
  return signature.slice(0,n)
}

//https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript