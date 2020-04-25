// Hide tip amount before loading page
document.getElementById("calculatedvalues").style.display = "none";

// Calculate percentage to save
function calculateSavings(){
  // Make a variable for income
  var income = document.getElementById("incomeamount").value;
  // Make a variable for savings percentage
  var billaccountpercent = document.getElementById("billspercent").value;
  var emergencyaccountpercent = document.getElementById("emergpercent").value;
  var spendaccountpercent = document.getElementById("spendpercent").value;

  // Validate income input
  if (income === ""){
    alert("Please input your income value.")
    return;
  }

 // Actually calculate savings amount
  var totalbills = (income * billaccountpercent)/100;
  finalbills = Math.round(totalbills * 100)/100;
  finalbills = finalbills.toFixed(2);
  document.getElementById("calculatedvalues").style.display = "block";
  document.getElementById("displaybills").innerHTML = "$" + finalbills;

  var totalemerg = (income * emergencyaccountpercent)/100;
  finalemerg = Math.round(totalemerg * 100)/100;
  finalemerg = finalemerg.toFixed(2);
  document.getElementById("calculatedvalues").style.display = "block";
  document.getElementById("displayemergencies").innerHTML = "$" + finalemerg;

   var totalspending = (income * spendaccountpercent)/100;
  finalspend = Math.round(totalspending * 100)/100;
  finalspend = finalspend.toFixed(2);
  document.getElementById("calculatedvalues").style.display = "block";
  document.getElementById("displayspending").innerHTML = "$" + finalspend;
}

// Call the calculate function
document.getElementById("calculate").onclick = function(){
  calculateSavings();
};
