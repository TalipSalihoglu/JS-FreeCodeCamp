// Sum All Primes
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
// SumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
function sumPrimes(num) {
    let sum=2
    let flag=true
    for(let i=3;i<=num;i++){
      flag=true
      for(let j=2;j<=Math.sqrt(i);j++){
          if(i%j==0){
            flag=false
            break
          }
      }
      if(flag) {
        sum+=i 
        }
    }
    return sum;
  }
  