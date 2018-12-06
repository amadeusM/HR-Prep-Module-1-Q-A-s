/*
Write a function called "calculateBillTotal".

Given the pre tax and pre tip amount of a meal, "calculateBillTotal" returns the total amount due after tax and tip.

Notes:
* Assume that sales tax is 9.5% and tip is 15%.
* Do NOT tip on the sales tax, only on the pre tip amount.
//first convert percentags to decimals
//9.5, 0.095
//15, 0.15

var output = calculateBillTotal(20);
console.log(output); // --> 24.9
*/

function calculateBillTotal(preTaxAndTipAmount) {
  
  //add preTaxAndTipAmount and multiply it by 9.5%, 0.095, and store in salesTax variable
  let salesTax = preTaxAndTipAmount  * 0.095;
  //add preTaxAndTipAmount and multiply it by 15%, 0.15, and store in tipAmount variable
  let tipAmount = preTaxAndTipAmount * 0.15;
  
  //add salesTax, tipAmount, and preTaxAndTipAmount to calculate the total bill
  //the totalBill amount will be stored in the variable totalBill

  totalBill = preTaxAndTipAmount + salesTax + tipAmount;

  return totalBill;

}

var output = calculateBillTotal(20);
console.log(output); // --> 24.9