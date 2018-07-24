
    var wordlist=["WOTAN", "SIEGFRIED", "NOTUNG", "BRUNNHILDE", "HAGEN", "ASGARD", "NIBELHEIM", "VALHALLA"];

// pick a random word from the word list
// var wordchoice = wordlist[Math.floor(Math.random() * wordlist.length)];

// put up a number of underscore characters with blanks equal to the number of letters in the word

var wins = 0
var losses = 0
var gameword = ""
var wordchoice = ""
var already = ""
var winsdiv = $("#winsdiv");
var lossesdiv = $("#lossesdiv");
var activeword = $("#activeword");
var remaining =  $("#remaining");
var sofar = $("#sofar");
var results = $("#results");
function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
};


function newgame() {


    // //clear out the old word
    $("#activeword").empty();
    var gameword = "";
    var already = "";

    // // select a new word from the list
    var wordchoice = wordlist[Math.floor(Math.random() * wordlist.length)];
    
    // // replenish guesses
    var guesses = 15;
    $("#remaining").empty();
    remaining.append("You have " + guesses + " guesses remaining!");


    // // put in blanks for the active word (spaces between the blanks provided by CCS)
    for (var i = 0; i < wordchoice.length; i++) {
    gameword += "_";
    };

    // // put the blanks for the active word into the activeword div
    activeword.append(gameword);

    // record player keystroke
    document.onkeyup = function(event) {
        var userGuess = event.key;

        // convert to upper case
        userGuess = userGuess.toUpperCase();
        console.log(userGuess);
        console.log(wordchoice);

        // Add to "already guessed list" and the rest of the stuff if not already guessed
        if (!already.includes(userGuess)) {
            $("#sofar").empty();
            already += userGuess;
            sofar.append("You have already guessed: " + already);


        // if the player keystroke is not in the word, decrement the counter
        if (!wordchoice.includes(userGuess)) {
            guesses--;
            $("#remaining").empty();
            remaining.append("You have " + guesses + " guesses remaining!");
        };

        // compare each letter of the game word to the player guess, if it matches change the matching one the player sees.
        for (i = 0; i < wordchoice.length; i++) {
            if (userGuess === wordchoice[i]) {
                gameword = setCharAt(gameword,i,userGuess);
            };

        
        // clear the game word again and put back up the current state of play
        
        $("#activeword").empty();
        activeword.append(gameword);
        };
        //check for loss, increment losses and start new game if so
        if (guesses < 1) {
            // var guesses = 5;
            $("#results").empty();
            results.append("<p>O Schmerz&#33;</p> \
                <br> \
                You Lost&#33; \
                Go ahead and try again.");
            $("#lossesdiv").empty();
            $("#sofar").empty();
            losses++;
            lossesdiv.append("Losses: " + losses);
            newgame();
        };

        //check for win, increment wins and start new game if so
        if (gameword === wordchoice) {
            console.log("You Win!!");
            $("#results").empty();
            results.append("<p>Hojotoho&#33;</p> \
                <br> \
                You Won&#33; \
                Go ahead and try again.");
            $("#winsdiv").empty();
            $("#sofar").empty();
            wins++;
            winsdiv.append("Wins: " + wins);
            newgame();
        };
    };
        // console.log(gameword);
        // console.log(guesses);    
        };

 

    console.log(gameword);
    console.log(wordchoice);
};

newgame();


console.log(gameword);
console.log(wordchoice);



// alert(wordlist[2][8]);
