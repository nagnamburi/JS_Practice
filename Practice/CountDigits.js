// var numbers = [
//     '123 124   11',
//     '68 23 '
// ];
// var i, j, counter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// //console.log(numbers[0][2]);

// for (i = 0; i < numbers.length; i++ ) {
//     for (j = 0; j < numbers[i].length; j++) {
//         if (numbers[i][j] !== ' ') {
//             counter[ numbers[i][j] ]++;
//         }
//     }
// }
// for (i = 0; i < 10; i++) {
//     console.log(i,  counter[i]);
// }

// var string = ['hello world'];

// console.log(string[0].length);

// for (var i=0; i < string[0].length; i++){
//     console.log(i);

// }

var string = "hello world";
var i, j;
var counter = [];
var chars = [];

for (i = 0; i < string.length; i++) {
    // console.log(string[i]);
    var found = false;
    for (j = 0; j < chars.length; j++) {
        if (chars[j] == string[i]) {
            counter[j]++;
            found = true;
            break;
        }
    }
    if (! found) {
        chars.push(string[i]);
        counter.push(1);        
    }
}

for (i = 0; i < chars.length; i++) {
    console.log(chars[i],  counter[i]);
}