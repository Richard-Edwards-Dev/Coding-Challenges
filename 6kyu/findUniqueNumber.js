function findUniq(arr) {
    return arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x))[0]
  }

  //https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
  //would only find the first unique number
  //find method might be more clear