'use strict';

let score = 0;

let siteVisitor = prompt('Hey! What is your name?');
alert(`Welcome ${siteVisitor}, let's play a guessing game. Please answer Yes or No.`);

function q1() {
  let questionOne = prompt('Do I like Sci-Fi books and movies?').toLowerCase();

  if (questionOne === 'yes' || questionOne === 'y') {
    alert(`Yes I do! If it's got an alien or a star ship in it I'm game!`);
    score = score + 1;
  } else if (questionOne === 'no' || questionOne === 'n') {
    alert('Sorry, that was a wrong guess.');
  } else {
    alert('Please answer with a valid response!');
  }
}
q1();

function q2() {
  let questionTwo = prompt('Do I ride a motorcycle?').toLowerCase();
  if (questionTwo === 'yes' || questionTwo === 'y') {
    alert('Yes I do! Any Honda riders in the house?! VROOM!!');
    score = score + 1;
  } else if (questionTwo === 'no' || questionTwo === 'n') {
    alert('Sorry, that was a wrong guess.');
  } else {
    alert('Please answer with a valid response!');
  }
}
q2();

function q3() {
  let questionThree = prompt('Do I have a pet snake?').toLowerCase();
  if (questionThree === 'yes' || questionThree === 'y') {
    alert('Well, I guess you do not know me as well as you think!');
  } else if (questionThree === 'no' || questionThree === 'n') {
    alert('That is correct! I will have none of that nonsense!');
    score = score + 1;
  } else {
    alert('Please answer with a valid response!');
  }
}
q3();

function q4() {
  let questionFour = prompt('Have I been to Darnassus?').toLowerCase();
  if (questionFour === 'yes' || questionFour === 'y') {
    alert('Elune-Adore! You are correct!');
    score = score + 1;
  } else if (questionFour === 'no' || questionFour === 'n') {
    alert('Sorry, that was a wrong guess.');
  } else {
    alert('Please answer with a valid response!');
  }
}
q4();

function q5() {
  let questionFive = prompt('Have I ever been in a movie?').toLowerCase();
  if (questionFive === 'yes' || questionFive === 'y') {
    alert('You are correct! I was an extra in I Am Legend -though you will not be able to see me!');
    score = score + 1;
  } else if (questionFive === 'no' || questionFive === 'n') {
    alert('Sorry, that was a wrong guess.');
  } else {
    alert('Please answer with a valid response!');
  }
  alert(`Wow, that was fun! Thanks for playing, ${siteVisitor}!`);
}
q5();

function q6() {
  let myNumber = 4;

  let questionSix = prompt(`How many dogs do I have? Take a guess! (0-10)`);
  let guesses = 0;

  while (questionSix != myNumber && guesses < 3) {
    if (questionSix > myNumber) {
      questionSix = prompt('No, not that many, try again!')
      guesses = guesses + 1;
    } else if (questionSix < myNumber) {
      questionSix = prompt(`No, I have more than ${questionSix}. Try again!`)
      guesses = guesses + 1;
    }
  }

  if (questionSix != 4) {
    alert(`No, but that's enough guessing. Why don't I just tell you: I have FOUR furkids!`)
  }
  else {
    alert(`That's correct! I have four furkids!`);
    score = score + 1;
  }
}
q6();

// Add a 7th question that has multiple possible correct answers that are stored in an array.
function q7() {

      let myArray = ['roger', 'franklin', 'connor', 'timmy', 'paul', 'bobby', 'lucy', 'elaine','sam', 'dean'];
      console.log(myArray);

// Give the user 6 attempts to guess the correct answer. 

        for (let i = 0; i < 6; i++) {
          let questionSeven = prompt(`What should I name my next puppy?`).toLowerCase();
          
        for (let j=0; j<myArray.length; j++) {
// The guesses will end once the user guesses a correct answer or they run out of attempts.
          if (questionSeven === myArray[j]){
            alert(`Yes, I like that name! Thanks!`);
            score = score + 1
            i=6;
            break;
          }
        }
        }    
// Display all the possible correct answers to the user.
        alert(`Here are all the names I've short-listed: ${myArray}`); 
}
q7();

// Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked. 

alert(`Thanks for playing the All About Vida Guessing Game! You got ${score} out of 7 questions correct!`)
