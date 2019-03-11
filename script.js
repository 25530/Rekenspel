const wrapper = document.getElementById("wrapper");
const myAssignment = document.getElementById("myAssignment");
const myAnswer = document.getElementById("myAnswer");
const feedback = document.getElementById("feedback");

let mySum;
let sound = new Audio();

function makeSum() {
    var a = Math.floor(Math.random() * 9 + 1);
    var b = Math.floor(Math.random() * 9 + 1);
    mySum = a + " * " + b;
 myAssignment.innerHTML =  a + " X " + b;
 myAnswer.focus();
}  

function keyPressed(evt) {
if (evt.keyCode == 13) {
  if (eval(mySum) == myAnswer.value) {
      feedback.src = "images/good.png";
      sound.src = "images/goed.mp3";
      sound.play();
  } else {
    feedback.src = "images/wrong1.png";
    sound.src = "images/wrong.mp3";
    sound.play();
  }
  window.setTimeout(waiting, 2000);
}
}
function waiting() {
    feedback.src = "images/cijfers.png";
    myAnswer.value = "";
    makeSum();
}

makeSum();
myAnswer.addEventListener("keydown", keyPressed, false);