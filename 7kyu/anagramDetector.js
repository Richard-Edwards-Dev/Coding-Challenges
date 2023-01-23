// write the function isAnagram
const isAnagram = function(test, original) {
    function alphaSort(string){
      return string.toLowerCase().split('').sort().join('')
    }
  return alphaSort(test)=== alphaSort(original)
};

//https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript