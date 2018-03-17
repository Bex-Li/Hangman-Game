console.log("anything we want"); 
//define wordToGuess variables
var wordToGuess = [
    "syntax",
    "jquery",
    "browser",
    "pseudo",
    "laptop",
    "variable"
];
//define variables needed
var guessesLeft = 8
var winCounter = 0
var loseCounter = 0
// var lettersInWord = 0
    // numDashes 
var dashAndGoodGuesses = []
var wrongGuesses = []
var winsHTML = document.getElementById("wins")
winsHTML.innerHTML = winCounter

//key press begins game & create function to getWord 
function getWord() {
    return wordToGuess[Math.floor(Math.random() * wordToGuess.length)];
}

document.addEventListener('keypress', function(event){
    console.log(winsHTML);
    var keyName = event.key;
    winsHTML.innerHTML = winCounter;
    console.log('key: ' + keyName);
});


// // guessesLeft = 9;
// //then random choose
// //then lettersInWord = wordToGuess.split

// //var numDashes = lettersInWord.length
// //array dashAndGoodGuesses to change the spaces _ to letters "a"

// //for loop to put dashes
// for ( ;; ) {
//     console.log();
// }
// // <!-- var nameArray = ("syntax", "jquery", "browser", "pseudo", laptop) {
// // 	forLoop ........	
// // } -->


// //getElementByID for guessesLeft
// //getElementByID for wordToGuess
// //getElementByID for wrongGuesses

// //onKeyUp function? 
// document.onkeyup = function(event) {
//     // Converts all key clicks to lowercase letters.
//     letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
//     console.log(letterGuessed);
//     startgame(letterGuessed);
//     roundComplete();
//    };

// //Function: getWord 

// //Function: Start Game 
//    //if/else

// //Function: Round Complete 
//     //win/lose
//         //if
//             // alert("Congrats! You WON!");
//         //else
//             // alert("Boo hoo, try again!")
//     //update fields
//         //if/else
//         //getElement




// // function myFunction() {
// //     var x = document.getElementById("newWord");
// //     x.value = x.value.toUpperCase();
// // }
