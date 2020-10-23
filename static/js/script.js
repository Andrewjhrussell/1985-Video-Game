//Challenge 1: Your Age in Days


function ageInDays(){
var birthYear = prompt("What year you were born....Young Jedi ?");
var ageInDays1 = (2018 - birthYear) * 365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('You are' + ageInDays1 + ' days old....may the force be with you.' );
h1.setAttribute('id', 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}
    //Challenge 2: Cat Generator
    function generateCat() {
        var image = document.createElement('img');
        var div = document.getElementById('flex-cat-gen');
        image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
        div.appendChild(image);
    }

// Challenge 3: Rock, Paper, Scissors
function rpsGame(yourChoice){
    console.log(yourChoice); 
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer choice:', botChoice);
    results = decideWinner(humanChoice, botChoice); // [0, 1] human lost | bot won
    console.log(results);
   // message = finalMessage(results); // {'message': 'You won!', 'color': 'green'}
   //rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return ['rock','paper', 'scissors'] [number];

}

function decideWinner(yourChoice, computerChoice) {
   var rpsDatabase = {
       'rock':{'scissors': 1, 'rock': 0.5, 'paper': 0 },
       'paper':{'rock': 1, 'paper': 0.5, 'scissors': 0},
       'scissors':{'paper': 1, 'scissors': 0.5, 'rock': 0}
   }
   var yourScore = rpsDatabase[yourChoice][computerChoice];
   var computerScore = rpsDatabase[computerChoice][yourChoice];

   return[yourScore, computerScore];
}
