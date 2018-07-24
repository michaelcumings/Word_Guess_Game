
    var wordlist=["WOTAN", "SIEGFRIED", "NOTUNG", "BRUNNHILDE", "HAGEN", "ASGARD", "NIBELHEIM", "VALHALLA"];

// pick a random word from the word list
// var wordchoice = wordlist[Math.floor(Math.random() * wordlist.length)];

// put up a number of underscore characters with blanks equal to the number of letters in the word

var gameword = ""
var wordchoice = ""
var activeword = $("#activeword");
function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
};

function newgame() {

    //clear out the old word
    $("#activeword").empty();

    // select a new word from the list
    var wordchoice = wordlist[Math.floor(Math.random() * wordlist.length)];
    var guesses = 15;


    // put in blanks for the active word (spaces between the blanks provided by CCS)
    for (var i = 0; i < wordchoice.length; i++) {
    gameword += "_";
    };

    // put the blanks for the active word into the activeword div
    activeword.append(gameword);

    // record player keystroke
    document.onkeyup = function(event) {
        var userGuess = event.key;

        // convert to upper case
        userGuess = userGuess.toUpperCase();
        console.log(userGuess);
        console.log(wordchoice);

        // if the player keystroke is not in the word, decrement the counter
        if (!wordchoice.includes(userGuess)) {
            guesses--;
        };

        // compare each letter of the game word to the player guess, if it matches change the matching one the player sees.
        for (i = 0; i < wordchoice.length; i++) {
            if (userGuess === wordchoice[i]) {
                gameword = setCharAt(gameword,i,userGuess);
                // var goodguess = true;
            };
        
        // clear the game word again and put back up the current state of play
        
        $("#activeword").empty();
        activeword.append(gameword);


        console.log(gameword);
        console.log(guesses);    
        };

    };

    console.log(gameword);
    console.log(wordchoice);
};

newgame();


console.log(gameword);
console.log(wordchoice);



// alert(wordlist[2][8]);
