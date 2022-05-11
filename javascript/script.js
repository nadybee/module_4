/** SELECTORS */
const quiz = document.querySelector(".container")
const start = document.getElementById("start")
const startingGame = document.getElementById("starting-game")
const next = document.getElementById("next")
const previous = document.getElementById("previous")
const questions = document.getElementsByClassName("question")
const answers = document.getElementsByName("answer")
const timer = document.getElementById("timer")
const correctAnswer = document.getElementById("correct-answer")
const correct = document.getElementById("correct")
const wrong = document.getElementById("wrong")
const main = document.getElementById("main")
const game = document.getElementById("game")
const showAnswer = document.getElementById("show-answer")
const highScoreButton = document.getElementById("see-high-scores")
const showHighScore = document.getElementById("see-high-scores")
const nameInput = document.getElementById("name")
const endofGameButtons = document.getElementById("end-of-game")
const saveScore = document.getElementById("save-score")
const saveSection = document.getElementById("save-section")
const showingUserScore = document.getElementById("user-score")
const saveAnswer = document.getElementById("save-button")
const saveButton = document.getElementById("save")
const error = document.getElementById("error")
const scoreBoard = document.getElementById("score-board")
const showAllScores = document.getElementById("show-all-scores")
const homeButton = document.getElementById("return-home")
const tryAgainButton = document.getElementById("try-again")

let quizHTML = []
const data = data1
let userScore = 0
let time = 200
let index = 0

/** FUNCTION TO GET QUESTIONS FROM DATA FOR PAGE */
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
           .join("")}
            </ul>
          `
    )
  }

  return quizHTML
}

/** ADDS A TIMER TO QUIZ */
const countdown = document.createElement("div")
countdown.classList.add("countdown")

timer.appendChild(countdown)

const countingDown = () => {
  var setTime = setInterval(() => {
    if (time > 1) {
      countdown.innerHTML = time
      time--
    } else if (time === 1) {
      countdown.innerHTML = time
      time--
    } else if (index === data.length) {
      clearInterval(setTime)
    } else {
      countdown.innerHTML = ``

      clearInterval(setTime)
      gameOver()
    }
  }, 1000)
}

/** STARTS THE QUIZ BY STARTING TIMER AND SHOWING QUIZ QUESTIONS */
const startGame = () => {
  getQuestions(data)
  countingDown()
  quiz.innerHTML = quizHTML[index]
  timer.classList.remove("hidden")
  saveAnswer.classList.remove("hidden")
  startingGame.classList.add("hidden")
  game.classList.remove("hidden")
  highScoreButton.classList.add("hidden")
  index++
}

/** FUNCTIONS FOR SAVE BUTTON */
let selected = false
let cAnswer

//locates correct  data in question
const findingCorrectAnswer = () => {
  for (item in data[index - 1].selection) {
    cAnswer = data[index - 1].selection[data[index - 1].answer]
      // replaces html like characters so answer and data match
      .replaceAll("&lt;", "<")
      .replaceAll("&gt", ">")
  }
}

const savingAnswer = () => {
  findingCorrectAnswer()
  //loops through answer choices
  for (let answer in answers) {
    if (answers[answer].checked) {
      selected = true

      showAnswer.classList.remove("hidden")
      //if selected answer matches the answer in the data
      if (answers[answer].value == cAnswer) {
        correct.classList.remove("hidden")
        correctAnswer.innerText = `Answer: ${cAnswer}`
      } else {
        wrong.classList.remove("hidden")
        time = time - 20
      }
      correctAnswer.innerText = `Answer: ${cAnswer}`
      correctAnswer.classList.remove("hidden")
      saveAnswer.classList.add("hidden")
      next.classList.remove("hidden")
    }
  }
  handleError()
}
/** add or remove error if user has made a selection or not */
const handleError = () => {
  if (!selected) {
    error.classList.remove("hidden")
  } else {
    error.classList.add("hidden")
  }
}

/** NEXT BUTTON FUNCTION */
const nextLogic = () => {
  selected = false
  error.classList.add("hidden")
  next.classList.add("hidden")
  correct.classList.add("hidden")
  wrong.classList.add("hidden")
  saveAnswer.classList.remove("hidden")
  if (time > 0 && index < data.length) {
    quiz.innerHTML = quizHTML[index]
    index++
    showAnswer.classList.add("hidden")
  } else {
    gameOver()
    time = 0
    countdown.innerHTML = ""
  }
}

/** WHAT HAPPENS WHEN TIME RUNS OUT OR QUESTIONS ARE FINISHED */
const gameOver = () => {
  userScore = time
  quiz.classList.add("hidden")
  saveAnswer.classList.add("hidden")
  document.getElementById(
    "end-of-game-info"
  ).innerHTML = ` <div class="game-over"><p> your time is: ${userScore}. </p> </div>`
  showAnswer.classList.add("hidden")
  timer.classList.add("hidden")
  next.classList.add("hidden")
  endofGameButtons.classList.remove("hidden")
}

/** REMOVE ERROR WHEN USER SELECTS AN ANSWER */
const fixAnswers = () => {
  error.classList.add("hidden")
}

/** RETRIEVES HIGH SCORES FROM LOCAL STORAGE AND DISPLAYS THEM */
const showScores = () => {
  saveSection.classList.add("hidden")
  startingGame.classList.add("hidden")
  //creates array of high scores
  const userList = renderMessage()
  let userHTML = []
  //pushes html to display high scores to an array
  for (let i = 0; i < userList.length; i++) {
    userHTML.push(`<h3>  ${userList[i].name}:  ${userList[i].score}  </h3>`)
  }

  scoreBoard.classList.remove("hidden")
  console.log(userHTML.length)
  if (userHTML.length > 0) {
    showAllScores.innerHTML = userHTML.join("")
  } else {
    showAllScores.innerHTML = `<p> no saved scores yet!</p>`
  }
}

/** ALLOWS USER TO ADD NAME TO SAVE SCORE LOCALLY */
const saveUserScore = () => {
  game.classList.add("hidden")
  saveSection.classList.remove("hidden")
  showingUserScore.innerText = `Your Score: ${userScore}`
}

/** SAVES USER NAME AND SCORE TO LOCAL STORAGE */
const saveUsersName = () => {
  let userInfo = {
    name: nameInput.value,
    score: userScore,
  }
  localStorage.setItem(`userInfo_${nameInput.value}`, JSON.stringify(userInfo))
  renderMessage()
  showScores()
}

/** RENDERS SCORES FROM LOCAL STORAGE */
const renderMessage = () => {
  let allUsers = []
  for (let i = 0; i < localStorage.length; i++) {
    allUsers.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
  }

  return allUsers
}

/** HOME BUTTON FUNCTION RETURNS TO START */
const returningHome = () => {
  scoreBoard.classList.add("hidden")
  startingGame.classList.remove("hidden")
}

/**TRY AGAIN BUTTON FUNTION: STARTS QUIZ AGAIN */
const tryingAgain = () => {
  time = 200
  index = 0
  endofGameButtons.classList.add("hidden")
  quiz.classList.remove("hidden")
  startGame()
}

/** EVENT LISTENERS */

start.addEventListener("click", startGame)
saveAnswer.addEventListener("click", savingAnswer)
next.addEventListener("click", nextLogic)
quiz.addEventListener("click", fixAnswers)
showHighScore.addEventListener("click", showScores)
saveScore.addEventListener("click", saveUserScore)
saveButton.addEventListener("click", saveUsersName)
homeButton.addEventListener("click", returningHome)
tryAgainButton.addEventListener("click", tryingAgain)
