// Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
// The range will be an array of two numbers that will not necessarily be in numerical order.
// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
function smallestCommons(arr) {
    let result=[]
    let min=Math.min(...arr)
    for(let i =min;i<=Math.max(...arr);i++){
      result.push(i)
    }
    let number=result[result.length-1]
    let i=1;
    let flag=true
    while(true)
    {
      let temp=number*i
      flag=true
      for(let j=0;j<result.length;j++){
        if(temp%result[j]!=0){
          flag=false
          break;
        }
      }
      if(flag) return temp
      i++
    }
  }