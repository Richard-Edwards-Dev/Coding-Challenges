function DNAStrand(dna){
    let complementStrand = ''
    for (let i = 0; i < dna.length; i++){
      if (dna[i] === 'A')  complementStrand += 'T'
      else if (dna[i] === 'T')  complementStrand += 'A'
      else if (dna[i] === 'C')  complementStrand += 'G'
      else if (dna[i] === 'G')  complementStrand += 'C'
    }
    return complementStrand
  }

  //https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript