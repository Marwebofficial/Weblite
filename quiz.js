let myobj = [{
    question: "What is the tag is used for paragraph",
    a:"p",
    b: "b",
    c: "hr",
    d: "none of the above",
    correct: "a"
}, {
    question: "what is the structure of a web page",
    a: "java",
    b: "python",
    c: "javaScript",
    d: "html",
    correct: "d"
}, {
    question: "HTML stand For",
    a: "High Texting Machine learning",
    b: "Hyper Text Markup Language",
    c: "High Transforming Language",
    d: "Hyper Text Markup protocol",
    correct: "b"
},{
    question: "what is used to show a line break",
    a: "br",
    b: "hr",
    c: "p",
    d: "b",
    correct: "a"
},{
    question: "what is used to show an horizontal line",
    a: "br",
    b: "hr",
    c: "p",
    d: "b",
    correct: "b"
},{
    question: "what tag is used to show a paragraph",
    a: "br",
    b: "hr",
    c: "p",
    d: "b",
    correct: "c"
},{
    question: "where is the visible content of a web page stored",
    a: "br",
    b: "hr",
    c: "p",
    d: "body",
    correct: "d"
},{
    question: "what is the largest heading",
    a: "hl",
    b: "h1",
    c: "h5",
    d: "h6",
    correct: "a"
},{
    question: "what is the smallest heading",
    a: "hl",
    b: "h1",
    c: "h5",
    d: "h6",
    correct: "d"
},{
    question: "what is used to show a numbered list",
    a: "hl",
    b: "ul",
    c: "li",
    d: "ol",
    correct: "a"
}];

const mainConatiner = document.querySelector(".main-container")
const quiz = document.querySelector(".quiz");
const timerElm = document.querySelector(".timer");
const scoreElm = document.querySelector(".scoreElm");
let index = 0;
let timer = 10;
let timeLeft = 10000;
let score = 0;

let timerInt = setInterval(() => {
    updateTimer();
}, 1000);
let htmInt = setInterval(() => {
    getQuiz();
}, timeLeft);

function getQuiz() {
    if (index > myobj.length - 1) {
        index = myobj.length - 1;
        clearInterval(timerInt);
        clearInterval(htmInt);
        scoreElm.style.display = "flex";
        scoreElm.innerHTML = ` <p>Here is your results ${score} out of ${myobj.length}</p>
        <button class="restart">Restart</button>`;
        const restart = document.querySelector(".restart")
        restart.addEventListener('click', () => {
            scoreElm.style.display = "none";
            index = 0;
            timer = 10;
            score = 0;
            updateTimer();
            getQuiz();
            timerInt = setInterval(() => {
                updateTimer();
            }, 1000);
            htmInt = setInterval(() => {
                getQuiz();
            }, timeLeft);
        })
    }
    const allQuiz = myobj[index];
    quiz.innerHTML = "";
    quiz.innerHTML = `<div class="ques-con">
                        <span class="noOfQuestion">${index+1}/${myobj.length}</span>
                        <h3>${allQuiz.question}</h3>
                        <span class="question-mark">?</span>
                    </div>
                    <div class="option">
                        <p id="a">${allQuiz.a}</p>
                        <p id="b">${allQuiz.b}</p>
                        <p id="c">${allQuiz.c}</p>
                        <p id="d">${allQuiz.d}</p>
                    </div>`;
    console.log(allQuiz);
    index++;
    const option = document.querySelectorAll(".option p");
    option.forEach(element => {
        element.addEventListener("click", () => {
            option.forEach(elem => {
                elem.classList.remove("select");
                elem.style.pointerEvents = "all";
            });
            element.classList.add("select");
            element.style.pointerEvents = "none";
        })
    });
    setTimeout(() => {
        checkAns(option, allQuiz);
    }, timeLeft - 200);
}
getQuiz();

function updateTimer() {
    if (timer < 0) {
        timer = 10;
    }
    timerElm.textContent = `Time Left : ${timer}`;
    timer--;
}
updateTimer()

function checkAns(option, allQuiz) {
    option.forEach(element => {
        if (element.id === allQuiz.correct && element.classList.contains("select")) {
            score++;
            console.log(score);
        } else {
            score = score;
        }
    });
}