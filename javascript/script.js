
const quiz = document.querySelector(".container");
const start = document.getElementById("start");
const startingGame = document.getElementById('starting-game')
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const questions = document.getElementsByClassName("question");
const answers = document.getElementsByName("answer");
const timer = document.getElementById("timer");
const correctAnswer = document.getElementById("correct-answer");
const correct = document.getElementById("correct");
const wrong = document.getElementById("wrong");
const main = document.getElementById("main");
const game =document.getElementById('game')
const showAnswer = document.getElementById("show-answer");
const showHighScore = document.getElementById('see-high-scores')
const nameInput = document.getElementById('name')
const endofGameButtons = document.getElementById('end-of-game')
const saveScore = document.getElementById('save-score')
const saveSection = document.getElementById('save-section')
const showingUserScore = document.getElementById('user-score')
const saveButton = document.getElementById('save')
const error = document.getElementById('error')

let quizHTML = [];
const data = data2;
let userScore =0
let time = 1000;
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
               `<li> <input type="radio" id="${j}" name="answer" value="${j}"> ${j} </li>`
           )
           .join("")}
            </ul>
          `
    );
  }

  return quizHTML;
};

const countdown = document.createElement("div");
countdown.classList.add("countdown");

timer.appendChild(countdown);

const countingDown = () => {
  var setTime = setInterval(() => {
    if (time > 1) {
      countdown.innerHTML = " " + time + ` seconds`;
      time--;
    } else if (time === 1) {
      countdown.innerHTML = " " + time + ` second`;
      time--;
    } else if (index === data.length) {
      clearInterval(setTime);
     
    } else {
      countdown.innerHTML = `TIME IS UP!`;

      clearInterval(setTime);
        gameOver()
    }
  }, 1000);
};

getQuestions(data);

start.addEventListener("click", () => {
  countingDown();
  quiz.innerHTML = quizHTML[index];
  timer.classList.remove('hidden')
  next.classList.remove("hidden");
  startingGame.classList.add("hidden");
  game.classList.remove('hidden')
  index++;
});

next.addEventListener("click", () => {
   for (let answer in answers){
       if (answers[answer].checked) { 
  if (time > 0 && index < data.length) {
    
    quiz.innerHTML = quizHTML[index];
    index++
    correctAnswer.classList.add("hidden");
    correct.classList.add("hidden");
    wrong.classList.add("hidden");
   
  } else {
    console.log("its over!");
    gameOver()
    time = 0
    countdown.innerHTML = ''
   
  }
}
else {
    error.classList.remove('hidden')
}
}

});

//write function to end game.
const showAnswers = () => {
  let findCorrectAnswer;
  error.classList.add("hidden")
  for (item in data[index - 1].selection) {
    findCorrectAnswer = data[index - 1].selection[data[index - 1].answer];
  }
  console.log(findCorrectAnswer);
  for (let answer in answers) {
    if (answers[answer].checked) {
      console.log(answers[answer].value);
      if (answers[answer].value == findCorrectAnswer) {
        correct.classList.remove("hidden");
        correctAnswer.innerText = `Answer: ${findCorrectAnswer}`;
        time = time + 30;
        //add focus to correct answers
      } else {
        wrong.classList.remove("hidden");
      }
      correctAnswer.innerText = `Answer: ${findCorrectAnswer}`;
      correctAnswer.classList.remove("hidden");
    }
  }
};

const gameOver = () => {
  console.log("game over");
  userScore = time;

  quiz.innerHTML = `<h3> Game Over </h3> <p> your time score is: ${userScore}. `;
  showAnswer.classList.add("hidden");
  timer.classList.add("hidden")
  next.classList.add('hidden')
  endofGameButtons.classList.remove('hidden')
  


};



const showScores = () => {
    const lastUser= renderMessage()
    main.innerText =  `Name: ${lastUser.name}  Score: ${lastUser.score}`;
    start.classList.remove('hidden')

}
const saveUserScore =() => {
    game.classList.add('hidden')
    saveSection.classList.remove('hidden')
 
    showingUserScore.innerText = `Your Score: ${userScore}`
 

}

const saveUsersName = () => {
   let userInfo = {
       name: nameInput.value,
       score: userScore
   }
   localStorage.setItem("userInfo", JSON.stringify(userInfo));
   renderMessage()
   showScores()

}
const renderMessage =()=> {
    var lastScore = JSON.parse(localStorage.getItem("userInfo"));
  return lastScore
}

const resetGame =() => {

}

quiz.addEventListener("click", showAnswers);

showHighScore.addEventListener('click', showScores)

saveScore.addEventListener('click', saveUserScore)

saveButton.addEventListener('click', saveUsersName)



