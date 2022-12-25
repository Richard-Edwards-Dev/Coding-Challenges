function shortcut (string) {
    let vowels = ['a','e','i','o','u']
    for(let i = 0; i < vowels.length; i++){
      string.replaceAll(vowels[i],'')    
  } return string
    }

//best soultion

// function shortcut(string){
//     return string.replace(/[aeiou]/g,'')
//   }

//https://www.codewars.com/kata/5547929140907378f9000039/train/javascript