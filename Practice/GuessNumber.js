// var hidden = Math.round(Math.random()*200+0.5);
// var counter = 0;
// console.log(hidden);

// function check_guess() {
//     counter++;
//     var n = Number(document.getElementById('n').value);
//     var result = 'equal after ' + counter + ' guesses';
//     if (n < hidden) {
//         result = n + ' is less than our number';
//     }
//     if (n > hidden) {
//         result = n + ' is greater than our number';
//     }
//     document.getElementById('result').innerHTML = result;
//     return false;
// }

// document.getElementById('go').addEventListener('click', check_guess);

var hidden = Math.trunc(Math.random()*200);
console.log(hidden);
var counter = 0;

function checkGuess(){
    counter++;
    var n = Number(document.getElementById('n').value);
        result = n + ' is correct guess!'
        
    if (n < hidden) {
        result = n + ' is less';
    }
    if (n > hidden) {
        result = n + ' is greater';
    }
    attempts = 'No. of attempts: '+ counter;
    document.getElementById('result').innerText = result;
    document.getElementById('attempts').innerText = attempts;
    
}

document.getElementById('go').addEventListener('click', checkGuess);