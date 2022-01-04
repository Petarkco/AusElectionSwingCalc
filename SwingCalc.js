var nationalSwingSlider = document.getElementById("nationalSwingSlider");
var nationalSwing = document.getElementById("nationalSwing")
var nat2PP = 51.53;
var coalSeats = 77;
var labSeats = 68;
var othSeats = 6;
var nat2PPafterswing = nat2PP;
var electionResult = "Coalition Win";
var swingTowards = "no change";
var swingAmount = "No swing";
var twoPPtowards = "";

document.getElementById("national2PP").innerText = nat2PPafterswing;
document.getElementById("overallOutcome").innerText = electionResult;
document.getElementById("coalSeatsWon").innerText = coalSeats;
document.getElementById("labSeatsWon").innerText = labSeats;
document.getElementById("othSeatsWon").innerText = othSeats;
document.getElementById("natSwingTowardsText").innerText = swingAmount;
document.getElementById("nat2PPTowardsText").innerText = swingTowards;

Papa.parse("/2019-FederalResults.csv", {})

nationalSwing.innerText = nationalSwingSlider.value;
nationalSwingSlider.oninput = function () {
    nationalSwing.innerText = this.value;
    var nat2PPafterswing = nat2PP - nationalSwingSlider.value;
    nat2PPafterswing = nat2PPafterswing.toFixed(2);
    document.getElementById("national2PP").innerText = nat2PPafterswing;
    if (nationalSwingSlider.value <= -1) {
        swingAmount = "swing towards Labor";
    } else if (nationalSwingSlider.value >= -1) {
        swingAmount = "swing towards Labor";
    } else {
        swingAmount = ""
    };
    if (nat2PPafterswing >= 50.01) {
        twoPPtowards = "towards Labor";
    } else if (nat2PPafterswing <= 49.99) {
        twoPPtowards = "towards Coalition";
    } else {
        twoPPtowards = "Equal";
    };
    if (coalSeats >= 76 && labSeats <= 76) {
        electionResult = "Coalition Win";
    } else if (coalSeats <= 76 && labSeats >= 76) {
        electionResult = "Labor Win";
    } else {
        electionResult = "Hung Parliament";
    }
    document.getElementById("overallOutcome").innerText = electionResult;
    document.getElementById("natSwingTowardsText").innerText = swingAmount;
    document.getElementById("nat2PPTowardsText").innerText = twoPPtowards;
};