// Letter Constructor for each letter of a word

function Letter(letter) { 

    this.letter = letter; // Property to store letter
    this.guess = false; 
    console.log("Welcome to the Hangman Constructor Game!");

    // function that checks each guessed letter for accuracy
    this.revealLetter = function () {
        // Condition that Determines which Character to Return
        if (this.guess === false) { 
            return " _ ";  // If the guessed letter is false, return " _ "
            console.log("Nope. Try again!");
        } else if (this.guess === true) { 
            return this.letter;     // If the guessed letter is true, return the letter
            console.log("You're correct!");
        } else if (this.letter == " ") {
            this.guessed = true; // If the guess is a space, return a space and set to true
            return " ";
        } 
    }; 
}; 




// export for use in word.js
module.exports = Letter;