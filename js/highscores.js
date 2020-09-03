const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// creating li to add inside ul on html with the score, got name and score from end.js
highScoresList.innerHTML = highScores.map((score) => `<li>${score.name} - ${score.score}<li>`)
  .join('');
