//DNA Pairing
//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
//Base pairs are a pair of AT and CG. Match the missing element to the provided character.
//Return the provided character as the first element in each array.
//For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
function pairElement(str) {
    let result=[]
    for(let i=0;i<str.length;i++)
    {
      let item=str[i]
      if(item=="G") result.push(["G","C"])
      else if(item=="C") result.push(["C","G"])
      else if(item=="A") result.push(["A","T"])
      else if(item=="T") result.push(["T","A"])
    }
    return result;
  }
  
  pairElement("GCG");