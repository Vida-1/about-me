'use strict';

let siteVisitor = prompt('Hey! What is your name?');
alert(`Welcome ${siteVisitor}, let's play a guessing game. Please answer Yes or No.`);

function q1() {
  let questionOne = prompt('Do I like Sci-Fi books and movies?').toLowerCase();

  if (questionOne === 'yes' || questionOne === 'y') {
    alert(`Yes I do! If it's got an alien or a star ship in it I'm game!`);
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
  } else {
    alert('Please answer with a valid response!');
  }
}
q3();

function q4() {
  let questionFour = prompt('Have I been to Darnassus?').toLowerCase();
  if (questionFour === 'yes' || questionFour === 'y') {
    alert('Elune-Adore! You are correct!');
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
  }
}
q6();


let numberTries = 0;

let myArray = ['haden', 'hamilton', 'hank', 'hans', 'hansel', 'harley', 'harold', 'harper', 'harris', 'harrison', 'harry', 'harvey', 'hatcher', 'haven', 'hawk', 'hawkins', 'hayden', 'heath', 'hector', 'henderson', 'hendrick', 'hendrik', 'henley', 'henry', 'herbert', 'herman', 'hero', 'hershel', 'hershy', 'heston', 'hezekiah', 'hiram', 'hiro', 'hogan', 'holden', 'holt', 'honor', 'howard', 'hudson', 'hugh', 'hugo', 'hunter', 'huxley'];
console.log(myArray);

let visitorName = prompt(`So I may be adding a young beagle to our pack but only if I can pick the perfect name for him. Do you have any suggestions? If you suggest one already on my short list I'll know it was meant to be! I've decided I want something that starts with an "H". What have you got?`).toLowerCase();

// For 7 userSuggestions, if the name appears in the array, alert user "I like that one!" otherwise "I think I"ll take a pass on that one, what else do you have?" 

// the following code is based on examples from today's lecture and some example source code found here: https://www.javatpoint.com/check-if-the-value-exists-in-array-in-javascript#:~:text=The%20indexof()%20method%20in,found%20and%20returns%20%2D1%20otherwise.

let stat;


while (numberTries !== 7) {
  checkArray();
  numberTries = numberTries + 1;
  alert(stat);
}


function checkArray(visitorName, myArray) {
  stat = `I think I'll take a pass on that one, what else do you have?`;

  for (let i = 0; i < myArray.length; i++) {
    let myLikes = myArray[i];
  }
  if (myLikes == visitorName) {
    stat = `Yes, I like that one too! What else do you have?`;

    //   break;  
  }

  return stat;
}