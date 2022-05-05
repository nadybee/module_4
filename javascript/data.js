const data = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    selection: [  `&lt;js&gt`, `&lt;script&gt`,`&lt;scripting&gt`,`&lt;javascript&gt`],
    // selection: ['"&lt;js&gt"', '"&lt;script&gt"', '"&lt;scripting&gt"', '"&lt;javascript&gt"'],
    answer: 1,
  },
  {
    question:
      "What is the correct JavaScript syntax to change the content of the HTML element below?",
    selection: [
      'document.getElementByName("p").innerHTML = "Hello World!";',
      'document.getElementById("demo").innerHTML = "Hello World!";',
      'document.getElement("p").innerHTML = "Hello World!";',
      '#demo.innerHTML = "Hello World!";',
    ],
    answer: 1,
  },

  {
    question: "Where is the correct place to insert a JavaScript?",
    selection: [
      "Both the &lt;head&gt' section and the &lt;body&gt section are correct",
      "The &lt;body&gt section",
      "the &lt;head&gt section",
    ],
    answer: 0,
  },
  {
    question:
      "What is the correct syntax for reffering to an external script called 'xxx.js'?",
    selection: [
      '&lt;script href="xxx.js"&gt',
      '&lt;script name="xxx.js"&gt',
      '&lt;script src="xxx.js"&gt',
    ],
    answer: 2,
  },
  {
    question: "The external JavaScript file must contain the &lt;script&gt tag.",
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
    selection: ['if (i!=5)', 'if(i&lt;&gt5)', 'ifi &lt;&gt5', 'if i=! 5 then'],
    answer: 0,
  },
];

