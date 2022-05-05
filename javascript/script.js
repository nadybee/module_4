let quizHTML = [];
const quiz = document.querySelector(".container");
const start = document.getElementById("start");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const questions = document.getElementsByClassName("question");
const answers = document.getElementsByName("answer");
const correctAnswer = document.getElementsByClassName("correct-answer")
const wrong = document.getElementById('wrong')
const correct = document.getElementById('correct')

const getQuestions = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    quizHTML.push(
      `<div class ="question" id= "${i}">
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
            <p id="correct" value="${arr[i].selection[arr[i].answer]}"> ${arr[i].selection[arr[i].answer]} </p>
            </div>
          `
    );
  }

  return quizHTML;
};
const allQuestions=getQuestions(data);
const quizQuestions = quizHTML.values();


start.addEventListener("click", () => {
   quiz.innerHTML= allQuestions[0]
//   quiz.innerHTML = quizQuestions.next().value;
  next.classList.remove("hidden");
  start.classList.add("hidden");
 
  
})

next.addEventListener("click", () => {
  quiz.innerHTML = quizQuestions.next().value;

  //   previous.classList.remove("hidden");
});

const showAnswer = () => {
  
    for (let answer of answers){
     if (answer.checked){
        console.log(answer.value)
        console.log(answer.checked)
        
     }
      }

}
quiz.addEventListener('click', showAnswer)

// previous.addEventListener("click", () => {
//     quiz.innerHTML = quizQuestions.previous();

//   });

const answerValues = () => {
    for (let answer of answers){
        console.log(answer.checked)
    }
}

// const AnswerValues = () => {
//    answers.addEventListener('click', ()=>{
//        console.log(answers)
//    })
// };

