// variables
const username = document.getElementById('username');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const finalScore = document.getElementById('finalScore');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

// creating a variable that will save the last score, push in an array and sort it
// eslint-disable-next-line no-undef
saveHighScore = (e) => {
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: username.value,
  };
  // adding score on the highScores array
  highScores.push(score);

  // sort the scores from higher
  highScores.sort((a, b) => b.score - a.score);

  // get just the 5 biggest scores
  highScores.splice(MAX_HIGH_SCORES);

  // transform integer into string to store in the local storage
  localStorage.setItem('highScores', JSON.stringify(highScores));

  window.location.assign('./index.html'); //  go to home page
};

// event listeners
username.addEventListener('keyup', () => {
  saveScoreBtn.disabled = !username.value;
});
