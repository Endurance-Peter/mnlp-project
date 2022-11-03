const firstNumber = Math.ceil(Math.random()*10);

const SecondNumber = Math.ceil(Math.random()*10);

const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");

const scoreEl= document.getElementById("score");

questionEl.innerText= `What is ${firstNumber} multiply by ${SecondNumber}?`;

const correctAnswer = firstNumber*SecondNumber;

let score= JSON.parse(localStorage.getItem("score"));

if(score == null){
    score=0;
}

formEl.addEventListener("submit", ()=>{
    const userAnswer = inputEl.value;
    if(userAnswer == correctAnswer)
    {
        score++;
        updateLocalStorage();
    }
    else{
        score--;
        updateLocalStorage();
    }

    console.log(score);
});
scoreEl.innerText= `score:${score}`;

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
}