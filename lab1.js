//--------------------------------------------------------------------------//
// Assignment: Lab 1                                                        //
// Name: Alex Supkay                                                        //
// Pledge: I pledge my honor that I have abided by the Stevens Honor System //
//--------------------------------------------------------------------------//

let sumOfSquares = (num1, num2, num3) => {
    num1 = Math.pow(num1, 2);
    num2 = Math.pow(num2, 2);
    num3 = Math.pow(num3, 2);
    return num1 + num2 + num3;
}

console.log ("------------------------------------------------------");
console.log ("             Function sumOfSquares                    ");
console.log ("------------------------------------------------------");
console.log(`sumOfSquares of 5, 3, and 10: ${sumOfSquares(5, 3, 10)}`);
console.log("sumOfSquares of 1, 2, and 3: " + sumOfSquares(1, 2, 3));
console.log("sumOfSquares of 6, 1, and 2: " + sumOfSquares(6, 1, 2));
console.log("sumOfSquares of 7, 5, and 4: " + sumOfSquares(7, 5, 4));
console.log("sumOfSquares of 9, 7, and 2: " + sumOfSquares(9, 7, 2));

let sayHelloTo = (firstName, lastName, title) => {
    if(typeof firstName === 'undefined') {
        console.log("the function sayHelloTo requires atleast one parameter sayHelloTo(firstName, lastName (optional), title (optional))");
    } else if (typeof lastName === 'undefined') {
        console.log("Hello, " + firstName + "!");
    } else if (typeof title === 'undefined') {
        console.log("Hello, " + firstName + " " + lastName + ". I hope you are having a good day!");
    } else {
        console.log("Hello, " + title + " " + firstName + " " + lastName + "! Have a good evening!");
    }
}

console.log ("------------------------------------------------------");
console.log ("              Function sayHelloTo                     ");
console.log ("------------------------------------------------------");
sayHelloTo();
sayHelloTo("Phil");
sayHelloTo("Phil", "Barresi");
sayHelloTo("Phil", "Barresi", "Mr.");
sayHelloTo("1", "2", "3", "4");

let cupsOfCoffee = (howManyCups) => {
    let verse = "";
    for(let i = howManyCups; i > 0; i--) {
        if(i == 1) {
            verse = verse + `${i} cup of coffee on the desk! ${i} cup of coffee!\nPick one up, drink the cup, no more coffee left on the desk!`
        } else {
            verse = verse + `${i} cups of coffee on the desk! ${i} cups of coffee!\nPick one up, drink the cup, ${i - 1} cups of coffee on the desk!\n\n`;
        } 
    }
    return verse;
}

console.log ("------------------------------------------------------");
console.log ("             Function cupsOfCoffee                    ");
console.log ("------------------------------------------------------");
console.log(cupsOfCoffee(5));
