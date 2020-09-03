/* eslint-disable no-param-reassign */
const chosenCategory = localStorage.getItem('category'); // get the chosen category from local storage
// eslint-disable-next-line radix
const chosenCategoryNumber = parseInt(chosenCategory); // converting into an integer

const apiURL = `https://opentdb.com/api.php?amount=10&category=${chosenCategoryNumber}&type=multiple&encode=base64`;

let acceptingAnswers = false;
let score = 0;
let questionsCounter = 0;
let availableQuestions = [];
let currentQuestion;

const question = document.getElementById('question');
const difficulty = document.getElementById('difficulty');
const category = document.getElementById('category');
const options = Array.from(document.querySelectorAll('.choice-text'));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

function shuffle(arr) {
  let i = arr.length;
  let j = 0;
  let temp;

  // eslint-disable-next-line no-plusplus
  while (i--) {
    j = Math.floor(Math.random() * (i + 1));

    // swap randomly chosen element with current element
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr;
}

function incrementScore(num) {
  score += num;
  scoreText.innerText = score;
}

function displayQuestions() {
  // if game finished
  if (availableQuestions.length === 0 || questionsCounter >= MAX_QUESTIONS) {
    localStorage.setItem('mostRecentScore', score);
    // go to the end page
    return window.location.assign('/end.html');
  }

  // eslint-disable-next-line no-plusplus
  questionsCounter++;
  questionCounterText.innerHTML = `${questionsCounter}/${MAX_QUESTIONS}`;

  const random = Math.floor(Math.random() * availableQuestions.length);

  currentQuestion = availableQuestions[random];

  difficulty.innerText = `Difficulty: ${atob(currentQuestion.difficulty)}`;
  category.innerText = `Category: ${atob(currentQuestion.category)}`;

  question.innerText = atob(currentQuestion.question);

  // shuffle options so the correct answer will be in a random position
  shuffle(options);
  options[0].innerText = atob(currentQuestion.correct_answer);
  options[1].innerText = atob(currentQuestion.incorrect_answers[0]);
  options[2].innerText = atob(currentQuestion.incorrect_answers[1]);
  options[3].innerText = atob(currentQuestion.incorrect_answers[2]);

  // taking out from the array the question that was answered
  availableQuestions.splice(random, 1);
  acceptingAnswers = true;

  return 'works';
}

options.forEach((option) => {
  option.addEventListener('click', (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.innerText;

    const classToApply = selectedAnswer === atob(currentQuestion.correct_answer) ? 'correct' : 'incorrect';

    if (classToApply === 'correct') {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      displayQuestions();
    }, 1000);
  });
});

async function getQuestions() {
  try {
    const response = await fetch(apiURL);
    const questionsArray = await response.json();

    availableQuestions = [...questionsArray.results];

    displayQuestions();
  } catch (error) {
    // Catch Error
  }
}
getQuestions();
