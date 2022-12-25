function past(h, m, s){
    m += h * 60
    s += m * 60
    return s * 1000
  }

  //https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

  //A little shorter
  // past = (h, m, s) => ((h * 60 + m) * 60 + s) * 1000;