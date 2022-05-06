const data2 = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    selection: [  `js tag`, `script tag`,`scripting tag`,`javascript tag`],
    // selection: ['"&lt;js&gt"', '"&lt;script&gt"', '"&lt;scripting&gt"', '"&lt;javascript&gt"'],
    answer: 1,
  },
  {
    question:
      "What is the correct JavaScript syntax to change the content of the HTML element below?",
    selection: [
      `document.getElementByName("p").innerHTML = "Hello World!"`,
      `document.getElementById("demo").innerHTML = "Hello World!"`,
      `document.getElement("p").innerHTML = "Hello World!"`,
      `#demo.innerHTML = "Hello World!"`,
    ],
    answer: 1,
  },

  {
    question: "Where is the correct place to insert a JavaScript?",
    selection: [
      "Both the head tag' section and the body tag section are correct",
      "The body section",
      "the head section",
    ],
    answer: 0,
  },
  {
    question:
      "How does a FOR loop start?",
    selection: [
      'for i = 1 to 5',
     'for (i = 0; i<=5; i++)',
     'for (i<= 5; i++)',
     ' for (i = 0; i<= 5)'
    ],
    answer: 1,
  },
  {
    question: "The external JavaScript file must contain the script tag.",
    selection: ["True", "False"],
    answer: 1,
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    selection: [
      'msg("Hello World!");',
      'alertBox("Hello World!");',
      'msgBox("Hello World!");',
      'alert("Hello World!");',
    ],
    answer: 3,
  },
  {
    question: "How do you create a function in JavaScript?",
    selection: [
      " function = myFunction()",
      " function myFunction()",
      " function:myFunction()",
    ],
    answer: 1,
  },
  {
    question: 'How do you call a function named "myFunction"?',
    selection: [
      "call myFunction()",
      "myFunction()",
      "call function myFunction()",
    ],
    answer: 1,
  },
  {
    question: "How to write an IF statement in JavaScript?",
    selection: ["if i=5 then", "if i==5 then", "if (i==5)", "if i=5"],
    answer: 2,
  },
  {
    question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    selection: ['if (i!=5)', 'if(<>5)', 'if i <>t5', 'if i=! 5 then'],
    answer: 0,
  },
];
