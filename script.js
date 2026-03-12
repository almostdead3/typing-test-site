
let text = "";
let timeLeft = 0;
let timer = null;

const beginner = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz";
const moderate = "The quick brown fox jumps over the lazy dog. Practice typing regularly to improve speed and accuracy.";
const topper = "Advanced typists maintain rhythm, precision, and speed while typing complex sentences with punctuation, numbers like 12345, and mixed cases efficiently.";

function startTest(){

const difficulty = document.getElementById("difficulty").value;
timeLeft = parseInt(document.getElementById("timer").value);

document.getElementById("time").innerText = timeLeft;

if(difficulty === "beginner"){
text = beginner;
}

if(difficulty === "moderate"){
text = moderate;
}

if(difficulty === "topper"){
text = topper;
}

document.getElementById("textDisplay").innerText = text;

document.getElementById("inputBox").value = "";
document.getElementById("inputBox").disabled = false;
document.getElementById("inputBox").focus();

clearInterval(timer);

timer = setInterval(function(){

timeLeft--;
document.getElementById("time").innerText = timeLeft;

if(timeLeft <= 0){
finishTest();
}

},1000);

}

function finishTest(){

clearInterval(timer);

const typed = document.getElementById("inputBox").value;

let correct = 0;

for(let i=0;i<typed.length;i++){

if(typed[i] === text[i]){
correct++;
}

}

let accuracy = (correct / typed.length) * 100;

let words = typed.length / 5;

let wpm = words;

document.getElementById("wpm").innerText = Math.round(wpm);
document.getElementById("accuracy").innerText = Math.round(accuracy);

document.getElementById("inputBox").disabled = true;

}
