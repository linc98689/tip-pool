window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let amount = 100000, years = 15, rate=0.04;
  document.getElementById("loan-amount").value = String(amount);
  document.getElementById("loan-years").value = String(years);
  document.getElementById("loan-rate").value = String(rate);
  let values = {amount:amount,years:years,rate:rate};
  let monthly= calculateMonthlyPayment(values);
  updateMonthly(monthly);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let values = getCurrentUIValues();
  let monthly = calculateMonthlyPayment(values);
  updateMonthly(monthly);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
   let p = values.amount;
   let i = values.rate/12;
   let  n = values.years *12;
   let result = (p * i)/(1-(1+i)**(-n));
   return  String(Math.round(result *100)/100); // keep two digits after decimal point
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.querySelector("#monthly-payment").innerText = "$" + monthly;
}
