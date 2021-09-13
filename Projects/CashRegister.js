// Cash Register
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
// cid is a 2D array listing available currency.
// The checkCashRegister() function should always return an object with a status key and a change key.
// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)


function checkCashRegister(price, cash, cid) {
    const UNITS= {
    "PENNY": .01,
    "NICKEL": .05,
    "DIME": .10,
    "QUARTER": .25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
  }
  var change=[];
  let total=0;
  let p=(cash-price)
  let temp=0

  for(let i=0;i<cid.length;i++){
      total+=cid[i][1]
  }

  total=total.toFixed(2)
  if(p>total) return { status: "INSUFFICIENT_FUNDS", change: []};
  if(total==p.toFixed(2)){
    return { status: "CLOSED", change: cid };
  }
  else{
    cid=cid.reverse()
    for(let i=0;i<cid.length;i++){
      temp=[cid[i][0],0]
      while(p>=UNITS[cid[i][0]] && cid[i][1]>0){
        temp[1] += UNITS[cid[i][0]];
        cid[i][1] -= UNITS[cid[i][0]];
        p -= UNITS[cid[i][0]];
        p = p.toFixed(2);
      }
      if (temp[1] > 0) {
        change.push(temp);
      }
    }
  }
  if (p > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  return { status: "OPEN", change: change};
}