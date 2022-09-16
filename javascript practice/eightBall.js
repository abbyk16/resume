eightBall.js

// set username
let userName = '';

//greet user by name or with 'hello' only, if no input
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// set user question
let userQuestion = '';

// confirm user question or ask for input
userQuestion ? console.log(`${userName}, it looks like you asked ${userQuestion}.`) : console.log('Please enter a question.');

// generate random integer from 0 to 7 (floor will round down the generated number)
let randomNumber = Math.floor(Math.random() * 8);

// set eightBall result
let eightBall = '';

// define eightBall values based on randomNumber values
switch (randomNumber) {
  case 0:
  eightBall = 'It is certain';
  break;
  case 1:
  eightBall = 'It is decidedly so';
  break;
  case 2:
  eightBall = 'Reply hazy try again';
  break;
  case 3:
  eightBall = 'Cannot predict now'
  break;
  case 4:
  eightBall = 'Do not count on it';
  break;
  case 5:
  eightBall = 'My sources say no';
  break;
  case 6:
  eightBall = 'Outlook not so good';
  break;
  case 7:
  eightBall = 'Signs point to yes';
  break;
}

// inform user of result
console.log(`Your fortune is: ${eightBall}`);
