var nationalSwingSlider = document.getElementById("nationalSwingSlider");
var nationalSwing = document.getElementById("nationalSwing")
var nat2PP = 51.53;
var coalSeats = 77;
var labSeats = 68;
var othSeats = 6;
var nat2PPafterswing = nat2PP;
document.getElementById("national2PP").innerText = nat2PPafterswing;
document.getElementById("coalSeatsWon").innerText = coalSeats;
document.getElementById("labSeatsWon").innerText = labSeats;
document.getElementById("othSeatsWon").innerText = othSeats;
nationalSwing.innerText = nationalSwingSlider.value;
nationalSwingSlider.oninput = function () {
    nationalSwing.innerText = this.value;
    var nat2PPafterswing = nat2PP - nationalSwingSlider.value;
    nat2PPafterswing = nat2PPafterswing.toFixed(2);
    document.getElementById("national2PP").innerText = nat2PPafterswing;
};