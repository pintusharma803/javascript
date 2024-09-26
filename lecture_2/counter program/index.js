const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
let count = 0;
decrease.onclick = function(){
    count++;
    mycounter.textContent = count;
}
reset.onclick = function(){
    count = 0;
    mycounter.textContent = count;
}
increase.onclick = function(){
    count--;
    mycounter.textContent = count;
}