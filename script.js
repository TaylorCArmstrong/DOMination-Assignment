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

//How to load the question on the page

const currentQuestion = quizData[0];

currentQuestion.options.forEach((option, index) => {
    const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.addEventListener('click', () => selectOption(index));
   
    const optionsContainer = document.getElementById("options-container");
        optionsContainer.appendChild(optionButton);

}
);

