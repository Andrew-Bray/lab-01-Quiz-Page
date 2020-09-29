import { countsAsAYes } from './counts-as-a-yes.js';
import { roundedPercentage } from './percentage.js';
//WHEN: Adding an event listener listening to the click of the button.
const launchButton = document.getElementById('launch-button');
const results = document.getElementById('results');
const followUp = document.getElementById('follow-up');
const percentage = document.getElementById('percentage');
const hidden = document.getElementById('hidden');

launchButton.addEventListener('click', () => {
    const userName = prompt('How would you like to be called?');
    //Ask users name
    //confirm that they want to do the test
    const usersConfirmation = prompt('Are you suuuure you wanna do this?');

    if (!countsAsAYes(usersConfirmation)) {
        alert('The bees will miss you!');
        return;
    }

    let correctAnswers = 0;

    const responseOne = prompt(`Okay ${userName}! First question: Does a queen bee lay up to 50 eggs a day?`)

    //user is correct!
    if (!countsAsAYes(responseOne)) {
        //keep track of how many answers are right
        correctAnswers++;
    }
    const responseTwo = prompt(`Furthermore, ${userName}: Do workers begin leaving the hive within 2 days of hatching?`);

    //user is correct!
    if (!countsAsAYes(responseTwo)) {
        //keep track of how many answers are right
        correctAnswers++;
    }

    const responseThree = prompt(`And lastly, do Drones get evicted at the end of the season?`)

    //user is correct!
    if (countsAsAYes(responseThree)) {
        //keep track of how many answers are right
        correctAnswers++;
    }

    //make sure to add ! to if(countsas...) if the answer would be no

    alert('You completed the Bee Quiz! Your sesults are in the hive.');

    //write a response to the page with their name and correct number of responses out of 3

    results.textContent = `Hey ${userName}, you got ${correctAnswers} right out of 3.`;

    percentage.textContent = `Thats ${roundedPercentage(correctAnswers)} correct.`;

    if (correctAnswers === 3) {
        followUp.textContent = 'It feels good to know it all, right?';
        hidden.classList.remove('hidden');

    } else if (correctAnswers === 2) {
        followUp.textContent = 'You\'d make a so-so queen.';
    } else if (correctAnswers === 1) {
        followUp.textContent = 'Perhaps you\'d bee a decent worker.';
    } else if (correctAnswers === 0) {
        followUp.textContent = 'You\'d possibly be a drone ,but chances are you\'d get evicted from the hive.';
    }
    
    


});


//import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM