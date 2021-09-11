// Map the Debris
// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
//https://en.wikipedia.org/wiki/Orbital_period

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;  
    let result=[]
    for(let i=0;i<arr.length;i++){
        let period=Math.round(2*Math.PI * Math.sqrt(Math.pow(earthRadius + arr[i].avgAlt, 3) / GM))
        result.push({name:arr[i].name,orbitalPeriod:period})
    }
  
    return result;
  }