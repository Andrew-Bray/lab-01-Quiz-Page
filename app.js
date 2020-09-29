import { countsAsAYes } from './counts-as-a-yes.js';
import { roundedPercentage } from './percentage.js';

const launchButton = document.getElementById('launch-button');
const results = document.getElementById('results');
const followUp = document.getElementById('follow-up');
const percentage = document.getElementById('percentage');
const hidden = document.getElementById('hidden');

launchButton.addEventListener('click', () => {
    const userName = prompt('How would you like to be called?');
    const usersConfirmation = prompt('Are you suuuure you wanna do this?');

    if (!countsAsAYes(usersConfirmation)) {
        alert('The bees will miss you!');
        return;
    }

    let correctAnswers = 0;

    const responseOne = prompt(`Okay ${userName}! First question: Does a queen bee lay up to 50 eggs a day?`)
    if (!countsAsAYes(responseOne)) {
        correctAnswers++;
    }

    const responseTwo = prompt(`Furthermore, ${userName}: Do workers begin leaving the hive within 2 days of hatching?`);
    if (!countsAsAYes(responseTwo)) {
        correctAnswers++;
    }

    const responseThree = prompt(`And lastly, do Drones get evicted at the end of the season?`)
    if (countsAsAYes(responseThree)) {
        correctAnswers++;
    }
// These actions take place after all three questions have been answered
    alert('You completed the Bee Quiz! Your results are in the hive.');

    results.textContent = `Hey ${userName}, you got ${correctAnswers} right out of 3.`;

    percentage.textContent = `Thats ${roundedPercentage(correctAnswers)} correct.`;
// Below are the unique responses depending on how many answers are correct
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