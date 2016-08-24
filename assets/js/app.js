// $(document).ready(function() {

//     for (var i = 0; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             arr.push('FizzBuzz');
//         } else if (i % 3 === 0) {
//             arr.push('Fizz');
//         } else if (i % 5 === 0) {
//             arr.push('Buzz');
//         } else {
//             arr.push(i);
//         }
//     }

// })

function fizzBuzz(maxValue) {
    // return a list of numbers with strings substituted
    // according to the rules
    var arr = [];
    for (var i = 1; i <= maxValue; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push('FizzBuzz');
        } else if (i % 3 === 0) {
            arr.push('Fizz');
        } else if (i % 5 === 0) {
            arr.push('Buzz');
        } else {
            arr.push(i);
        }
    }
    return arr;
}

function displayFizzBuzz(valueList) {
    // appends <li> elements to a <ul> in the dom
    $('.list').append(valueList.map(function(i){
    	return "<li>" + i + "</li>";
    }));
}

function doFizzBuzz() {
    displayFizzBuzz(fizzBuzz(parseInt(prompt())));
}

$(document).ready(doFizzBuzz);


/*

1. Prompting a user to supply a number
2. Make a function that takes an integer as an argument 
3. If % 3, 5 or 3/5 the arugment should result in Fizz, Buzz, or FizzBuzz
4. convert the input from a string to number, using parsetInt() to check
for correct numberal input--> use error message

var num = "10";
console.log(typeof num);

var newNum = 0;

num = parseInt(num);

console.log(typeof num);
console.log(num);


ParseInt()  -> 

*/
