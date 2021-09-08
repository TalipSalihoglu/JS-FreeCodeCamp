// Wherefore art thou
//Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

function whatIsInAName(collection, source) {
    var arr = [];
    let keys=Object.keys(source)
    let c=0
    for(let i=0;i<collection.length;i++)
    {
      c=0
        for(let j=0;j<keys.length;j++){
            if(collection[i].hasOwnProperty(keys[j])){
               if(collection[i][keys[j]]===source[keys[j]]){
                  c++
               }    
              } 
          }
        if(c==keys.length){
          arr.push(collection[i])
        }        
    }  
    return arr;
  }
  
   whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });