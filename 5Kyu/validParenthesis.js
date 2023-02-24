function validParentheses(parens) {
    while(parens.includes('()')){
      parens = parens.replaceAll('()', '')
    }
    return parens.length === 0
  }

//https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript