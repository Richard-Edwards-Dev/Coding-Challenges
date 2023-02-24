function generateHashtag (str) {
    let array = str.split(" ").map(word =>{ 
      if(!word.includes(' ') && word) return word[0].toUpperCase() + word.slice(1)
      else return ""
      })
    array.unshift('#')
    let hashtag = array.join('')
    return hashtag.length > 1 && hashtag.length < 141 ? hashtag : false
  }

  //https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript