// Quiz Data with 10 Questions
const quizData = [
    { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], answer: "Paris" },
    { question: "Which language runs in a web browser?", options: ["Java", "C", "Python", "JavaScript"], answer: "JavaScript" },
    { question: "What does CSS stand for?", options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Computer Style Sheets"], answer: "Cascading Style Sheets" },
    { question: "What year was JavaScript launched?", options: ["1996", "1995", "1994", "1997"], answer: "1995" },
    { question: "What is the largest planet in our solar system?", options: ["Mars", "Earth", "Jupiter", "Venus"], answer: "Jupiter" },
    { question: "Who developed the theory of relativity?", options: ["Newton", "Einstein", "Galileo", "Tesla"], answer: "Einstein" },
    { question: "What is the square root of 64?", options: ["6", "7", "8", "9"], answer: "8" },
    { question: "Which HTML tag is used to link an external CSS file?", options: ["<script>", "<link>", "<style>", "<css>"], answer: "<link>" },
    { question: "Which continent has the most countries?", options: ["Africa", "Asia", "Europe", "South America"], answer: "Africa" },
    { question: "What is the smallest prime number?", options: ["0", "1", "2", "3"], answer: "2" }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-btn");
        button.addEventListener("click", () => checkAnswer(option));
        optionsEl.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
        alert("✅ Correct!");
    } else {
        alert(`❌ Wrong! The correct answer was: ${correctAnswer}`);
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionEl.textContent = "🎉 Quiz Completed!";
    optionsEl.innerHTML = "";
    scoreEl.textContent = `Your Score: ${score} / ${quizData.length}`;
    nextBtn.style.display = "none";
}

nextBtn.addEventListener("click", loadQuestion);

// Initialize Quiz
loadQuestion();
