/*******************************************************
 * File: sophisticated_code.js
 * Description: Complex and Elaborate JavaScript Code
 ******************************************************/

// --- Global Variables ---
let userScores = [];
let currentScore = 0;
let currentLevel = 1;
let maxLevel = 10;
let timerInterval;
let gameStarted = false;

// --- Utility Functions ---
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
  if (gameStarted) {
    console.log("Game already started!");
    return;
  }

  console.log("Starting Game...");
  gameStarted = true;

  // Set up timer
  let timeLeft = 60;
  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      console.log("Time left:", timeLeft, "seconds");
    } else {
      clearInterval(timerInterval);
      console.log("Game Over! Your final score is", currentScore);
      gameStarted = false;
    }
  }, 1000);
}

function endGame() {
  if (!gameStarted) {
    console.log("No active game to end.");
    return;
  }

  console.log("Ending Game...");
  clearInterval(timerInterval);
  console.log("Final Score:", currentScore);
  gameStarted = false;
}

// --- Game Functions ---
function generateQuestion(level) {
  const operand1 = getRandomNumber(1, level * 10);
  const operand2 = getRandomNumber(1, level * 10);
  const operators = ["+", "-", "*", "/"];
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  switch (operator) {
    case "+":
      return { question: `What is ${operand1} + ${operand2}?`, answer: operand1 + operand2 };
    case "-":
      return { question: `What is ${operand1} - ${operand2}?`, answer: operand1 - operand2 };
    case "*":
      return { question: `What is ${operand1} * ${operand2}?`, answer: operand1 * operand2 };
    case "/":
      return { question: `What is ${operand1} / ${operand2}? (Answer rounded to two decimal places)`, answer: (operand1 / operand2).toFixed(2) };
    default:
      return null;
  }
}

function validateAnswer(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    console.log("Correct!");
    currentScore++;
  } else {
    console.log("Wrong Answer!");
  }
}

function playRound() {
  const question = generateQuestion(currentLevel);
  console.log("Question:", question.question);

  const userAnswer = prompt("Enter your answer:");
  validateAnswer(userAnswer, question.answer);

  if (currentLevel < maxLevel) {
    currentLevel++;
    playRound();
  } else {
    endGame();
  }
}

// --- Execution ---
startGame();
playRound();

// --- Other Code ---
// ... (more code here)