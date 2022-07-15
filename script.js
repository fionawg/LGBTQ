var factList = [
  "90% of LGBT students hear anti-LGBT comments in school.", 
  "74% of Transgender youth report sexual harassment at school based on their gender identity and expression.", 
  "25% of LGB students have been physically hurt by another student because of their sexual orientation.",
  "55% of Transgender youth report physical attacks based on their gender identity and/or expression.",
  "28% of LGBT youth dropped out of school due to peer harassment.",
  "LGBT individuals account for 30% of all suicides each year.",
  "Greater than 50% of transgender youth attempt suicide."];


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
