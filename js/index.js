const geography = document.querySelector('.geography');
const history = document.querySelector('.history');
const movies = document.querySelector('.movies');
const music = document.querySelector('.music');
const generalKnowledge = document.querySelector('.generalKnowledge');
const television = document.querySelector('.television');
const sports = document.querySelector('.sports');
const science = document.querySelector('.science');
const celebrities = document.querySelector('.celebrities');
const animals = document.querySelector('.animals');
const play = document.querySelector('.play');

let chosenCategory;

geography.addEventListener('click', () => {
  chosenCategory = '22';
  localStorage.setItem('category', chosenCategory);
  window.location.assign('/game.html');
});

history.addEventListener('click', () => {
  chosenCategory = '23';
  localStorage.setItem('category', chosenCategory);
  window.location.assign('/game.html');
});
movies.addEventListener('click', () => {
  chosenCategory = '11';
  localStorage.setItem('category', chosenCategory);
  window.location.assign('/game.html');
});
music.addEventListener('click', () => {
  chosenCategory = '12';
  localStorage.setItem('category', chosenCategory);
  window.location.assign('/game.html');
});
generalKnowledge.addEventListener('click', () => {
  chosenCategory = '9';
  localStorage.setItem('category', chosenCategory);
  window.location.assign('/game.html');
});
television.addEventListener('click', () => {
  chosenCategory = '14';
  localStorage.setItem('category', chosenCategory);
  window.location.assign('/game.html');
});
sports.addEventListener('click', () => {
  chosenCategory = '21';
  localStorage.setItem('category', chosenCategory);
  window.location.assign('/game.html');
});
science.addEventListener('click', () => {
  chosenCategory = '17';
  localStorage.setItem('category', chosenCategory);
  window.location.assign('/game.html');
});
celebrities.addEventListener('click', () => {
  chosenCategory = '26';
  localStorage.setItem('category', chosenCategory);
  window.location.assign('/game.html');
});
animals.addEventListener('click', () => {
  chosenCategory = '27';
  localStorage.setItem('category', chosenCategory);
  window.location.assign('/game.html');
});
play.addEventListener('click', () => {
  chosenCategory = '0';
  localStorage.setItem('category', chosenCategory);
  window.location.assign('/game.html');
});
