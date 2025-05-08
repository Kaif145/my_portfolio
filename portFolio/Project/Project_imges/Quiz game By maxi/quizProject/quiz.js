const questions = [
    {
        question: "What is the value of π (pi) to two decimal places?",
        answers: [
            { text: "3.14", correct: true },
            { text: "2.72", correct: false },
            { text: "1.41", correct: false },
            { text: "1.61", correct: false },
        ]
    },
    {
        question: "What is the square root of 144?",
        answers: [
            { text: "12", correct: true },
            { text: "14", correct: false },
            { text: "16", correct: false },
            { text: "10", correct: false },
        ]
    },
    {
        question: "Which is largest animal in the woeld?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue Whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},

        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Charles Dickens", correct: false },
            { text: "Jane Austen", correct: false },
            { text: "Mark Twain", correct: false },
        ]
    },
    {
        question: "Which book is considered the first novel ever written?",
        answers: [
            { text: "Don Quixote", correct: false },
            { text: "The Tale of Genji", correct: true },
            { text: "The Odyssey", correct: false },
            { text: "Beowulf", correct: false },
        ]
    },
    
    {
        question: "which is the Smallest cuntinent in the world?",
        answers: [
            { text: "Australia", correct: true},
            { text: "Asia", correct: false},
            { text: "Arctic", correct: false},
            { text: "Africa", correct: false},

        ]
    },
    {
        question: "which is the largest desert in the  world?",
        answers: [
            { text: "Kalahari", correct: false},
            { text: "Gobi", correct: false},
            { text: "Sahare", correct: false},
            { text: "Antarctica", correct: true},

        ]
    },
    {
        question: "which is the smallest country in the  world?",
        answers: [
            { text: "Vatican City", correct: true},
            { text: "Bhutan", correct: false},
            { text: "Nepal", correct: false},
            { text: "Sri Lanka", correct: false},

        ]
    },



    {
        question: "Who was the first President of the United States?",
        answers: [
            { text: "George Washington", correct: true },
            { text: "Thomas Jefferson", correct: false },
            { text: "Abraham Lincoln", correct: false },
            { text: "John Adams", correct: false },
        ]
    },
    {
        question: "In which year did the Titanic sink?",
        answers: [
            { text: "1912", correct: true },
            { text: "1905", correct: false },
            { text: "1918", correct: false },
            { text: "1923", correct: false },
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "O2", correct: false },
            { text: "H2O", correct: true },
            { text: "CO2", correct: false },
            { text: "H2", correct: false },
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Mars", correct: true },
            { text: "Venus", correct: false },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false },
        ]
    },
    {
        question: "Which river is the longest in the world?",
        answers: [
            { text: "Amazon", correct: false },
            { text: "Nile", correct: true },
            { text: "Yangtze", correct: false },
            { text: "Mississippi", correct: false },
        ]
    },
    {
        question: "Which country has the most natural lakes?",
        answers: [
            { text: "Canada", correct: true },
            { text: "Russia", correct: false },
            { text: "USA", correct: false },
            { text: "India", correct: false },
        ]
    },
    {
        question: "Who is known as the father of the computer?",
        answers: [
            { text: "Charles Babbage", correct: true },
            { text: "Alan Turing", correct: false },
            { text: "John von Neumann", correct: false },
            { text: "Bill Gates", correct: false },
        ]
    },
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hypertext Markup Language", correct: true },
            { text: "Home Tool Markup Language", correct: false },
            { text: "Hyperlink and Text Markup Language", correct: false },
            { text: "Hyperlinking Text Marking Language", correct: false },
        ]
    },
    {
        question: "Which country won the FIFA World Cup in 2018?",
        answers: [
            { text: "France", correct: true },
            { text: "Croatia", correct: false },
            { text: "Brazil", correct: false },
            { text: "Germany", correct: false },
        ]
    },
    {
        question: "In which sport is the term 'Love' used?",
        answers: [
            { text: "Tennis", correct: true },
            { text: "Badminton", correct: false },
            { text: "Cricket", correct: false },
            { text: "Football", correct: false },
        ]
    }
    
    
    

    
    

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();


}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener ("click", selectAnswer);
    })
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }

}
function selectAnswer (e){
    const selecatedBtn = e.target;
    const isCorrect = selecatedBtn.dataset.correct ==="true";
    if (isCorrect){
        selecatedBtn.classList.add("correct");
        score++;

    }else {
        selecatedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
            if(button.dataset.correct === "true"){
                button.classList.add ("correct");
            }
            button.disabled = true;
        });
        nextButton.style.display = "block";
}
function showScore() {
    resetState();
    questionElement.innerHTML = `You scorad ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "paly Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz() ;


