//Sum All Numbers in a Range
//We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

function sumAll(arr) {
    let min=0
    let max=0
    if(arr[0]>arr[1]){
      min=arr[1]
      max=arr[0]
    }
    else{
      min=arr[0]
      max=arr[1]
    }
    let n=(max-min)+1 //Count of numbers
    return ((max+min)*n)/2;
  }
  
  sumAll([1, 4]); //Example