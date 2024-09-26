const pi = 3.1414;
let radius;
let circum;
document.getElementById("mysubmit").onclick = function(){
    radius = document.getElementById("myinput").value;
    radius = Number(radius);
    circum = 2*pi*radius;
    document.getElementById("myh3").textContent = circum + " cm";
}