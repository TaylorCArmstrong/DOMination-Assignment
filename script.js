//Eg of how to write quiz data!

const quizData = [
    {
        question: "Which of these is a primary color?",
        options: ["orange", "purple", "green", "blue"],
        answer: 3
    },
    {
        question: "Who was the first president of the United States?",
        options: ["Grover Clevland","Barak Obama","George Washington","Benjamin Franklin"],
        answer: 2
        
    },
    {
        question: "Whats 9+10?",
        options: ["19","21","20","25"],
        answer: 0
    },
    {
        question: "What is the 4th day of the week?",
        options: ["Sunday","Wednesday","Friday","Tuesday"],
        answer: 1
    }
];



// Stating the Variables
let currentIndex = 0;
let score = 0;
let selectedOption = 0;

//DOM elements
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("score-text");

//How to load the question on the page

function loadQuestion() {
    const currentQuestion = quizData[currentIndex];
    questionText.textContent =currentQuestion.question;
    optionsContainer.innerHTML = '';
    selectedOption = 0;
    nextButton.disabled = true;

    currentQuestion.options.forEach((option, index) =>{
        const button = document.createElement('button');
        button.classList.add('option-button');
        button.addEventListener('click', () => {
            selectedOption = index;
            nextButton.disabled = false;
            highlightSelection(index);
        });
        optionsContainer.appendChild(button);
    });
}

//Highlight selected option
function highlightSelection(selectedIndex) {
    const buttons = document.querySelectorAll('.option-button');
    buttons.forEach((btn, idx) => {
        btn.style.backgroundColor = idx === selectedIndex ? '#add8e6' : '';
    });
}

// Handle next question
nextButton.addEventListener('click', () => {
  if (selectedOption === quizData[currentIndex].answer) {
    score++;
  }

  currentIndex++;
  if (currentIndex < quizData.length) {
    loadQuestion();
  } else {
    showResults();
  }
});

// Show final score
function showResults() {
  document.getElementById("quiz-container").style.display = "none";
  resultContainer.style.display = "block";
  scoreText.textContent = `${score} out of ${quizData.length}`;
}

// Start quiz
loadQuestion();

