let timeLeft=0;
let timer=null;
let originalText="";
let started=false;

const beginner=[
"abc def ghi",
"cat dog sun",
"red blue green",
"apple ball cat",
"A B C D E F",
"a b c d e f"
];

const moderate=[
"The quick brown fox jumps over the lazy dog",
"Typing practice improves speed and accuracy",
"Learning keyboard skills takes patience"
];

const topper=[
"Advanced typists maintain rhythm while typing complex sentences efficiently.",
"Speed and precision together define a professional level typist.",
"Typing without looking at the keyboard increases productivity."
];

function randomSentence(arr){
return arr[Math.floor(Math.random()*arr.length)];
}

function startTest(){

started=false;

const difficulty=document.getElementById("difficulty").value;

timeLeft=parseInt(document.getElementById("timerInput").value);

document.getElementById("time").innerText=timeLeft;

if(difficulty==="beginner"){
originalText=randomSentence(beginner);
}

if(difficulty==="moderate"){
originalText=randomSentence(moderate);
}

if(difficulty==="topper"){
originalText=randomSentence(topper);
}

displayText(originalText);

document.getElementById("inputBox").value="";
document.getElementById("inputBox").disabled=false;
document.getElementById("inputBox").focus();

clearInterval(timer);

timer=setInterval(()=>{
timeLeft--;
document.getElementById("time").innerText=timeLeft;

if(timeLeft<=0){
finishTest();
}

},1000);

}

function displayText(text){

const container=document.getElementById("textDisplay");

container.innerHTML="";

text.split("").forEach(char=>{

const span=document.createElement("span");

span.innerText=char;

container.appendChild(span);

});

}

document.getElementById("inputBox").addEventListener("input",()=>{

const typed=document.getElementById("inputBox").value;

const spans=document.querySelectorAll("#textDisplay span");

let correct=0;

spans.forEach((span,index)=>{

const letter=typed[index];

if(letter==null){

span.classList.remove("correct","wrong","current");

}

else if(letter===span.innerText){

span.classList.add("correct");

span.classList.remove("wrong");

correct++;

}

else{

span.classList.add("wrong");

span.classList.remove("correct");

}

});

if(spans[typed.length]){

spans[typed.length].classList.add("current");

}

});

function finishTest(){

clearInterval(timer);

const typed=document.getElementById("inputBox").value;

let words=typed.length/5;

let minutes=parseInt(document.getElementById("timerInput").value)/60;

let wpm=words/minutes;

let correct=0;

for(let i=0;i<typed.length;i++){

if(typed[i]===originalText[i]){
correct++;
}

}

let accuracy=(correct/typed.length)*100;

document.getElementById("wpm").innerText=Math.round(wpm);

document.getElementById("accuracy").innerText=Math.round(accuracy);

document.getElementById("inputBox").disabled=true;

}
