const textDisplay = document.getElementById('text-display');
const inputArea = document.getElementById('input-area');
const wpmLabel = document.getElementById('wpm');
const accLabel = document.getElementById('acc');
const resetBtn = document.getElementById('reset-btn');

const wordBank = [
    "Education is not the learning of facts, but the training of the mind to think.",
    "The beautiful thing about learning is that nobody can take it away from you.",
    "The secret of getting ahead is getting started.",
    "Practice makes perfect. Keep typing to improve your speed."
];

let startTime = null;
let currentQuote = "";

function startNewTest() {
    inputArea.value = "";
    inputArea.focus();
    startTime = null;
    wpmLabel.innerText = "0";
    accLabel.innerText = "100";
    
    currentQuote = wordBank[Math.floor(Math.random() * wordBank.length)];
    renderText("");
}

function renderText(inputValue) {
    textDisplay.innerHTML = '';
    const quoteChars = currentQuote.split('');
    const inputChars = inputValue.split('');
    let errors = 0;

    quoteChars.forEach((char, i) => {
        const span = document.createElement('span');
        if (inputChars[i] == null) {
            span.className = '';
        } else if (inputChars[i] === char) {
            span.className = 'char-correct';
        } else {
            span.className = 'char-error';
            errors++;
        }
        span.innerText = char;
        textDisplay.appendChild(span);
    });
    return errors;
}

inputArea.addEventListener('input', () => {
    if (!startTime && inputArea.value.length > 0) {
        startTime = new Date();
    }

    const userInput = inputArea.value;
    const errorCount = renderText(userInput);

    // Calculate Stats
    if (startTime) {
        const minutes = (new Date() - startTime) / 60000;
        const wpm = Math.round((userInput.length / 5) / minutes);
        wpmLabel.innerText = wpm > 0 ? wpm : 0;

        const accuracy = Math.round(((userInput.length - errorCount) / userInput.length) * 100);
        accLabel.innerText = accuracy >= 0 ? accuracy : 100;
    }

    // Finish Condition
    if (userInput.length >= currentQuote.length) {
        inputArea.disabled = true;
        setTimeout(() => {
            alert(`Test Complete! WPM: ${wpmLabel.innerText}`);
            inputArea.disabled = false;
            startNewTest();
        }, 500);
    }
});

resetBtn.addEventListener('click', startNewTest);

// Initialize on load
window.onload = startNewTest;
