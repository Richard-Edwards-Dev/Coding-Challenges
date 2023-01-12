function highAndLow(stringOfNumbers){
    let arr = stringOfNumbers.split(' ')
    return `${Math.max(...arr)} ${Math.min(...arr)}`
}

//https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript