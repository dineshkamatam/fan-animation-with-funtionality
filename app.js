let round = document.getElementById("round");
let on = document.getElementById("on");
let off = document.getElementById("off");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");

on.addEventListener("click",e => {
    round.classList.add("on")
    round.style.animationDuration = "0.8s"
    
})
off.addEventListener("click",e => {
    round.classList.remove("on")
})
one.addEventListener("click",e => {
   round.style.animationDuration = "0.8s"
})
two.addEventListener("click",e => {
   round.style.animationDuration = "0.6s"
})
three.addEventListener("click",e => {
   round.style.animationDuration = "0.4s"
})