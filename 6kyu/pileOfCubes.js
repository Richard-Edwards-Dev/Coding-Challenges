function findNb(m) {
    let n = 1
    let volume = 1
    while(volume < m){
      n++
      volume += n**3
    }
  return volume === m ? n : -1
}

//https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/javascript