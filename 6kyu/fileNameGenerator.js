function generateName(){
    let alpha = 'abcdefghijklmnopqrstuvwyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    let randomLetter = () => alpha[Math.floor(Math.random() * 51)]
    let uniqueName = []
    for(let i = 0; i < 6; i++){
      uniqueName.push(randomLetter())
    }
    return photoManager.nameExists(uniqueName.join('')) ? generateName() : uniqueName.join('')
  }

  //https://www.codewars.com/kata/586a933fc66d187b6e00031a/train/javascript