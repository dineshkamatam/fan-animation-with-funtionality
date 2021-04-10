let round = document.getElementById("round");
let on = document.getElementById("on");
let off = document.getElementById("off");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");

on.addEventListener("click",e => {
    round.style.animationName = "anim"
    round.style.animationDuration = "0.8s"
    round.style.animationIterationCount = "infinite"
    round.style.animationTimingFunction = "linear"
    
})
off.addEventListener("click",e => {
   round.style.animationDuration = "2s";
  round.style.animationIterationCount = "initial";
   round.style.animationTimingFunction = "ease-out";
})
one.addEventListener("click",e => {
   round.style.animationDuration = "0.6s"
})
two.addEventListener("click",e => {
   round.style.animationDuration = "0.3s"
})
three.addEventListener("click",e => {
   round.style.animationDuration = "0.1s"
})