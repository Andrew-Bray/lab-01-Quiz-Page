export function countsAsAYes(userInput) {
    //we get thew input, we capitalize it all and is true if first letter is a 'Y', return true
    return userInput.charAt(0).toUpperCase() === 'Y';
}