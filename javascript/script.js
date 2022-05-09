const quiz = document.querySelector('.container');
const start = document.getElementById('start');
const startingGame = document.getElementById('starting-game');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const questions = document.getElementsByClassName('question');
const answers = document.getElementsByName('answer');
const timer = document.getElementById('timer');
const correctAnswer = document.getElementById('correct-answer');
const correct = document.getElementById('correct');
const wrong = document.getElementById('wrong');
const main = document.getElementById('main');
const game = document.getElementById('game');
const showAnswer = document.getElementById('show-answer');
const highScoreButton = document.getElementById('see-high-scores')
const showHighScore = document.getElementById('see-high-scores');
const nameInput = document.getElementById('name');
const endofGameButtons = document.getElementById('end-of-game');
const saveScore = document.getElementById('save-score');
const saveSection = document.getElementById('save-section');
const showingUserScore = document.getElementById('user-score');
const saveAnswer = document.getElementById('save-button');
const saveButton = document.getElementById('save');
const error = document.getElementById('error');
const scoreBoard = document.getElementById('score-board');
const showAllScores = document.getElementById('show-all-scores');
const homeButton = document.getElementById('return-home');
const tryAgainButton = document.getElementById('try-again');
let quizHTML = [];
const data = data1;
let userScore = 0;
let time = 5;
let index = 0;

const getQuestions = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    quizHTML.push(
      `<div class ="question" id= "${i}" value="${
        arr[i].selection[arr[i].answer]
      }">
         <h3> ${arr[i].question}</h3> 
         <ul> 
         ${arr[i].selection
           .map(
             (j) =>
               `<li> <input type="radio" name="answer" id="${j}" class="radio-input"  value="${j}"> 
               <label  for="${j}"> ${j} </label>
               </li>`
           )
           .join('')}
            </ul>
          `
    );
  }

  return quizHTML;
};


const countdown = document.createElement('div');
countdown.classList.add('countdown');

timer.appendChild(countdown);

const countingDown = () => {
  var setTime = setInterval(() => {
    if (time > 1) {
      countdown.innerHTML = ' ' + time + ` seconds`;
      time--;
    } else if (time === 1) {
      countdown.innerHTML = ' ' + time + ` second`;
      time--;
    } else if (index === data.length) {
      clearInterval(setTime);
    } else {
      countdown.innerHTML = ``;

      clearInterval(setTime);
      gameOver();
    }
  }, 1000);
};

const startGame =() => {
  getQuestions(data)
  countingDown();
  quiz.innerHTML = quizHTML[index];
  timer.classList.remove('hidden');
  saveAnswer.classList.remove('hidden');
  startingGame.classList.add('hidden');
  game.classList.remove('hidden');
  highScoreButton.classList.add('hidden')
  index++;
};
// getQuestions(data);

const savingAnswer = () => {
  let findCorrectAnswer;
  for (item in data[index - 1].selection) {
    findCorrectAnswer = data[index - 1].selection[data[index - 1].answer]
      .replaceAll('&lt;', '<')
      .replaceAll('&gt', '>');
  }
  console.log(findCorrectAnswer);
  for (let answer in answers) {
    if (answers[answer].checked) {
      showAnswer.classList.remove('hidden');
      console.log(answers[answer].value);
      if (answers[answer].value == findCorrectAnswer) {
        console.log('correct');
        correct.classList.remove('hidden');
        correctAnswer.innerText = `Answer: ${findCorrectAnswer}`;
        time = time + 30;
      } else {
        console.log(wrong);
        wrong.classList.remove('hidden');
      }
      correctAnswer.innerText = `Answer: ${findCorrectAnswer}`;
      correctAnswer.classList.remove('hidden');
      saveAnswer.classList.add('hidden');
      next.classList.remove('hidden');
      error.classList.add('hidden');
    }
    else {
        error.classList.remove('hidden')
    }
  }
};

const nextLogic = () => {
  error.classList.add('hidden');
  next.classList.add('hidden');
  correct.classList.add('hidden');
  wrong.classList.add('hidden');
  saveAnswer.classList.remove('hidden');
  if (time > 0 && index < data.length) {
    quiz.innerHTML = quizHTML[index];
    index++;
    showAnswer.classList.add('hidden');
  } else {
    console.log('its over!');
    gameOver();
    time = 0;
    countdown.innerHTML = '';
  }
};

const fixAnswers = () => {
  error.classList.add('hidden');
};

const gameOver = () => {
  userScore = time;
  quiz.classList.add('hidden');
  saveAnswer.classList.add('hidden');

  document.getElementById(
    'end-of-game-info'
  ).innerHTML = ` <div class="game-over"><p> your time score is: ${userScore}. </p> </div>`;
  showAnswer.classList.add('hidden');
  timer.classList.add('hidden');
  next.classList.add('hidden');
  endofGameButtons.classList.remove('hidden');
};

const showScores = () => {
  startingGame.classList.add('hidden')
  const userList = renderMessage();
  console.log(userList);
  let userHTML = [];

  for (let i = 0; i < userList.length; i++) {
    if (userList.length === 0) {
      userHTML.push(`<h3> You have no high scores saved </h3>`);
    } else {
      userHTML.push(`<h3>  ${userList[i].name}:  ${userList[i].score}  </h3>`);
    }
  }
 
  scoreBoard.classList.remove('hidden');
  showAllScores.innerHTML = userHTML.join('');
};

const saveUserScore = () => {
  game.classList.add('hidden');
  saveSection.classList.remove('hidden');

  showingUserScore.innerText = `Your Score: ${userScore}`;
};

const saveUsersName = () => {
  let userInfo = {
    name: nameInput.value,
    score: userScore,
  };
  localStorage.setItem(`userInfo_${nameInput.value}`, JSON.stringify(userInfo));
  renderMessage();
  showScores();
};
const renderMessage = () => {
  let allUsers = [];
  for (let i = 0; i < localStorage.length; i++) {
    allUsers.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }
  console.log(allUsers);
  //     var lastScore = JSON.parse(localStorage.getItem(`userInfo_${nameInput.value}`));
  //   return lastScore
  return allUsers;
};

const returningHome = () => {

  scoreBoard.classList.add('hidden');
  startingGame.classList.remove('hidden')

};

const tryingAgain = () => {
  console.log('try again')
  time = 5;
  index = 0;
  endofGameButtons.classList.add("hidden")
  quiz.classList.remove('hidden');
startGame()

};
/** EVENT LISTENERS */

start.addEventListener('click',startGame) 


// removeError()
saveAnswer.addEventListener('click', savingAnswer);

next.addEventListener('click', nextLogic);

quiz.addEventListener('click', fixAnswers);

showHighScore.addEventListener('click', showScores);

saveScore.addEventListener('click', saveUserScore);

saveButton.addEventListener('click', saveUsersName);

homeButton.addEventListener('click', returningHome);

tryAgainButton.addEventListener('click',tryingAgain)
