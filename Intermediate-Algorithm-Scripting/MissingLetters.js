//Missing letters
//Find the missing letter in the passed letter range and return it.
//If all letters are present in the range, return undefined.
function fearNotLetter(str) {
    let start=str.charCodeAt(0)
    let len=str.length
    let i=0
    while(i<len){
      let chr=String.fromCharCode(i+start)
      if(!(str[i]==chr)){
          return chr
      }
      i++
    }
    return undefined;
  }

  console.log(fearNotLetter("abce"))