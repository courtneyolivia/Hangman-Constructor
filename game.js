// Array of randomly selected word for player to guess
var wordChoices = ['christmas', 'halloween', 'thanksgiving', 'newyears', 'fourthofjuly', 'easter'];


// Function that chooses a random word
exports.wordChoices = function () {
    var ranNum = Math.floor((Math.random() * words.length) + 1);
    return words[ranNum];
}

