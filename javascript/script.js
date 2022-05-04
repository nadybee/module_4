

const quiz = document.querySelector('.container')
const getQuestions = (arr) => {
    let quizHTML= []
    for (let i=0; i<arr.length; i++) {
     
        quizHTML.push(
       `<h3> ${arr[i].question}</h3> 
       <ul> 
       ${arr[i].selection.map(j=> `<li>${j} `)}
          </ul>
        `
        )

    }
    return quizHTML.join('')
}

const printAll = (arr) => {
    
}

quiz.innerHTML= getQuestions(questions)
console.log(getQuestions(questions))
