let quizHTML = [];
const quiz = document.querySelector('.container');
const start = document.getElementById('start');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const questions = document.getElementsByClassName('question');
const answers = document.getElementsByName('answer');
const timer = document.getElementById('timer');
const correctAnswer = document.getElementById('correct-answer');
const correct = document.getElementById('correct');
const wrong = document.getElementById('wrong');
const data = data2;

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
           .join('')}
            </ul>
          `
    );
  }

  return quizHTML;
};
// const allQuestions=getQuestions(data);
// const quizQuestions = quizHTML.values();
const countdown = document.createElement('div');
let time = 500;
timer.appendChild(countdown);
countdown.innerHTML = ' ' + time + ` seconds`;

const countingDown = setInterval(() => {
  if (time <= 0) {
    clearInterval(countingDown);
  }
}, 1000);

getQuestions(data);
start.addEventListener('click', () => {
  quiz.innerHTML = quizHTML[index];
  //   quiz.innerHTML = quizQuestions.next().value;
  next.classList.remove('hidden');
  start.classList.add('hidden');
  index++;
});

next.addEventListener('click', () => {
  quiz.innerHTML = quizHTML[index++];
  correctAnswer.classList.add('hidden')
  correct.classList.add('hidden')
  wrong.classList.add('hidden')


});

//write function to end game.
const showAnswer = () => {
 
  let findCorrectAnswer;

  for (item in data[index - 1].selection) {
    findCorrectAnswer = data[index - 1].selection[data[index - 1].answer];
  }
console.log(findCorrectAnswer)
  for (let answer in answers) {
    if(answers[answer].checked) {
      console.log(answers[answer].value)
      if(answers[answer].value==findCorrectAnswer){
      correct.classList.remove('hidden')
      correctAnswer.innerText = `Answer: ${findCorrectAnswer}`
     //add focus to correct answers

      
      }
      else {
        wrong.classList.remove('hidden')
       


      }
      correctAnswer.innerText = `Answer: ${findCorrectAnswer}`
      correctAnswer.classList.remove('hidden')
    }
    // if (answers[answer].checked === findCorrectAnswer) {
    //   console.log('correct');
    // } else {
    //   console.log('nope');
    // }
  }
};

// }
// }
// };

quiz.addEventListener('click', showAnswer);

// previous.addEventListener("click", () => {
//     quiz.innerHTML = quizQuestions.previous();

//   });
