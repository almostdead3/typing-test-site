let timeLeft = 0;
let timer = null;
let originalText = "";

const beginner = [
"abc def ghi",
"cat dog sun",
"red blue green",
"apple ball cat",
"simple easy words",
"A B C D E F",
"a b c d e f"
];

const moderate = [
"The quick brown fox jumps over the lazy dog",
"Typing practice improves speed and accuracy",
"Learning keyboard skills takes patience",
"Practice daily to become a faster typist",
"Consistency builds strong typing habits"
];

const topper = [
"Advanced typists maintain rhythm while typing complex sentences efficiently.",
"Speed and precision together define a professional level typist.",
"Typing without looking at the keyboard increases productivity.",
"Accurate muscle memory helps typists achieve remarkable speeds.",
"Professional programmers often type thousands of words daily."
];

function randomSentence(list){

return list[Math.floor(Math.random()*list.length)];

}

function startTest(){

const difficulty = document.getElementById("difficulty").value;

timeLeft = parseInt(document.getElementById("timerInput").value);

document.getElementById("time").innerText = timeLeft;

if(difficulty==="beginner"){

originalText = randomSentence(beginner);

}

if(difficulty==="moderate"){

originalText = randomSentence(moderate);

}

if(difficulty==="topper"){

originalText = randomSentence(topper);

}

document.getElementById("textDisplay").innerText = originalText;

document.getElementById("inputBox").value="";
document.getElementById("inputBox").disabled=false;
document.getElementById("inputBox").focus();

clearInterval(timer);

timer=setInterval(function(){

timeLeft--;

document.getElementById("time").innerText=timeLeft;

if(timeLeft<=0){

finishTest();

}

},1000);

}

function finishTest(){

clearInterval(timer);

const typed=document.getElementById("inputBox").value;

let correct=0;

for(let i=0;i<typed.length;i++){

if(typed[i]===originalText[i]){

correct++;

}

}

let accuracy=(correct/typed.length)*100;

let words=typed.length/5;

let minutes=parseInt(document.getElementById("timerInput").value)/60;

let wpm=words/minutes;

document.getElementById("wpm").innerText=Math.round(wpm);

document.getElementById("accuracy").innerText=Math.round(accuracy);

document.getElementById("inputBox").disabled=true;

}
