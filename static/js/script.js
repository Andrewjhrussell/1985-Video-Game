//Challenge 1: Your Age in Days


function ageInDays(){
var birthYear = prompt("What year you were born....Young Jedi ?");
var ageInDays1 = (2018 - birthYear) * 365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('You are' + ageInDays1 + ' days old may the force be with you' );
h1.setAttribute('id', 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}