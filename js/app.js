'use strict';

let siteVisitor = prompt('Hey! What is your name?');
alert(`Welcome ${siteVisitor}, let's play a guessing game. Please answer Yes or No.`);

let questionOne = prompt('Do I like Sci-Fi books and movies?').toLowerCase();

if(questionOne === 'yes' || questionOne === 'y'){
  alert(`Yes I do! If it's got an alien or a star ship in it I'm game!`);
} else if (questionOne === 'no' || questionOne ==='n'){
    alert('Sorry, that was a wrong guess.');
  } else {
    alert('Please answer with a valid response!');
  }

let questionTwo = prompt('Do I ride a motorcycle?').toLowerCase();
if(questionTwo === 'yes' || questionTwo === 'y'){
  alert('Yes I do! Any Honda riders in the house?! VROOM!!');
} else if (questionTwo === 'no' || questionTwo ==='n'){
    alert('Sorry, that was a wrong guess.');
  } else {
    alert('Please answer with a valid response!');
  }

let questionThree = prompt('Do I have a pet snake?').toLowerCase();
if(questionThree === 'yes' || questionThree === 'y'){
  alert('Well, I guess you do not know me as well as you think!');
} else if (questionThree === 'no' || questionThree ==='n'){
    alert('That is correct! I will have none of that nonsense!');
  } else {
    alert('Please answer with a valid response!');
  }
  
let questionFour = prompt('Have I been to Darnassus?').toLowerCase();
if(questionFour === 'yes' || questionFour === 'y'){
  alert('Elune-Adore! You are correct!');
} else if (questionFour === 'no' || questionFour ==='n'){
    alert('Sorry, that was a wrong guess.');
  } else {
    alert('Please answer with a valid response!');
  }

  let questionFive = prompt('Have I ever been in a movie?').toLowerCase();
if(questionFive === 'yes' || questionFive === 'y'){
  alert('You are correct! I was an extra in I Am Legend -though you will not be able to see me!');
} else if (questionFive === 'no' || questionFive ==='n'){
    alert('Sorry, that was a wrong guess.');
  } else {
    alert('Please answer with a valid response!');
  }
alert(`Wow, that was fun! Thanks for playing, ${siteVisitor}!`);

let questionSix = prompt('How many dogs do I have? Take a guess!').toLowerCase();
while (questionFive !== 4){
  alert('You are correct! I was an extra in I Am Legend -though you will not be able to see me!');
} else if (questionFive === 'no' || questionFive ==='n'){
    alert('Sorry, that was a wrong guess.');
  } else {
    alert('Please answer with a valid response!');
  }
alert(`Wow, that was fun! Thanks for playing, ${siteVisitor}!`);