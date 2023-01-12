function accum(string){
    let mumble = string.split('')
    for(let i = 0; i < mumble.length; i++){
        mumble[i] = mumble[i].toUpperCase() + mumble[i].toLowerCase().repeat(i)
    }
    return mumble.join('-')
}


//could be done with map
//function accum(s) {
//	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
//}
//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
