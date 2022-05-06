let quizHTML = [];
const quiz = document.querySelector(".container");
const start = document.getElementById("start");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const questions = document.getElementsByClassName("question");
const answers = document.getElementsByName("answer");
const timer = document.getElementById('timer')


const getQuestions = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    quizHTML.push(
      `<div class ="question" id= "${i}" value="${arr[i].selection[arr[i].answer]}">
         <h3> ${arr[i].question}</h3> 
         <ul> 
         ${arr[i].selection
           .map(
             (j) =>
               `<li> <input type="radio" id="${j}" name="answer" value="${j}" >${j} </li>`
           )
           .join("")}
            </ul>
            <h3 id= "correct" class="hidden"> Correct! </h3>
            <h3 id= "wrong" class="hidden"> Wrong! </h3>
            <p id="correct-answer" class= "hidden"value="${arr[i].selection[arr[i].answer]}"> Answer:  ${arr[i].selection[arr[i].answer]} </p>
            </div>
          `
    );
  }

  return quizHTML;
};
const allQuestions=getQuestions(data);
const quizQuestions = quizHTML.values();
const countdown = document.createElement('div')
const time = 500;
timer.appendChild(countdown)
countdown.innerHTML = ' ' + time + ` seconds`;


start.addEventListener("click", () => {

   quiz.innerHTML= quizQuestions.next().value
//   quiz.innerHTML = quizQuestions.next().value;
  next.classList.remove("hidden");
  start.classList.add("hidden");
 
  
})

next.addEventListener("click", () => {
  quiz.innerHTML = quizQuestions.next().value;

  //   previous.classList.remove("hidden");
});

const showAnswer = () => {
  const correctAnswer = document.getElementById('correct-answer')
  const correct = document.getElementById('correct')
  const wrong = document.getElementById('wrong')
    for (let answer of answers){
     if (answer.checked){
       if(answer.value === questions[0].getAttribute('value')) {
         correctAnswer.classList.remove('hidden')
         correct.classList.remove('hidden')
      
       }
       else {
        correctAnswer.classList.remove('hidden')
        wrong.classList.remove('hidden')
       }
        // console.log(answer.value)
      
        // console.log(questions[0].getAttribute('value'))
        
     }
      }

}
quiz.addEventListener('click', showAnswer)

// previous.addEventListener("click", () => {
//     quiz.innerHTML = quizQuestions.previous();

//   });



