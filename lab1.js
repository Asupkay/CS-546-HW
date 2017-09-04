
//--------------------------------------------------------------------------//
// Assignment: Lab 1                                                        //
// Name: Alex Supkay                                                        //
// Pledge: I pledge my honor that I have abided by the Stevens Honor System //
//--------------------------------------------------------------------------//

//--------------------------------------------------------------------------//
// Function: sumOfSquares                                                   //
// Parameters: num1, num2, num3                                             //
// Description: Calculate the sum of the squares of 3 numbers and return    //
// that result.                                                             //
// Example: sumOfSquares(5, 3, 10) would return 134.                        //
//--------------------------------------------------------------------------//
function sumOfSquares(num1, num2, num3) {
    //Check that all the input is numbers
    if(typeof num1 == 'number' && typeof num2 == 'number' && typeof num3 == 'number') { 
        //Put each number to the power of two and then return it.
        num1 = Math.pow(num1, 2);
        num2 = Math.pow(num2, 2);
        num3 = Math.pow(num3, 2);
        return num1 + num2 + num3;
    } else {
        throw "parameters of sumOfSquares must be numbers";
    }
}

console.log ("------------------------------------------------------");
console.log ("|            Function sumOfSquares                   |");
console.log ("------------------------------------------------------");
console.log("sumOfSquares of 5, 3, and 10: " + sumOfSquares(5, 3, 10));
console.log("sumOfSquares of 1, 2, and 3: " + sumOfSquares(1, 2, 3));
console.log("sumOfSquares of 6, 1, and 2: " + sumOfSquares(6, 1, 2));
console.log("sumOfSquares of 7, 5, and 4: " + sumOfSquares(7, 5, 4));
console.log("sumOfSquares of 9, 7, and 2: " + sumOfSquares(9, 7, 2));

//--------------------------------------------------------------------------//
// Function: sayHelloTo                                                     //
// Parameters: firstName, lastName, title                                   //
// Description: you will make a simple function that uses console.log to    //
// print hello to someone!                                                  //
// Example: sayHelloTo(); // throws                                         // 
// sayHelloTo("Phil"); // logs: Hello, Phil!                                // 
// sayHelloTo("Phil", "Barresi"); //logs: Hello, Phil Barresi. I hope you   //
// are having a good day!                                                   //
// sayHelloTo("Phil", "Barresi", "Mr."); // logs: Hello, Mr. Phil Barresi!  //
// Have a good evening!                                                     //
//--------------------------------------------------------------------------//
function sayHelloTo (firstName, lastName, title) {
    //If there are too many or too few arguments
    if(arguments.length > 3 || arguments.length < 1) {
        throw "the function sayHelloTo requires atleast one parameter and less than four sayHelloTo(firstName, lastName (optional), title (optional))";
    } else if (typeof lastName === 'undefined') {
        console.log("Hello, " + firstName + "!");
    } else if (typeof title === 'undefined') {
        console.log("Hello, " + firstName + " " + lastName + ". I hope you are having a good day!");
    } else {
        console.log("Hello, " + title + " " + firstName + " " + lastName + "! Have a good evening!");
    }
}

console.log ("------------------------------------------------------");
console.log ("|             Function sayHelloTo                    |");
console.log ("------------------------------------------------------");
//sayHelloTo();
sayHelloTo("Phil");
sayHelloTo("Phil", "Barresi");
sayHelloTo("Phil", "Barresi", "Mr.");
//sayHelloTo("1", "2", "3", "4");

//--------------------------------------------------------------------------//
// Function: cupsOfCoffee                                                   //
// Parameters: howManyCups                                                  //
// Description: For the third function, you will create and return a simple //
// song called 99 Cups of Coffee on the Desk.                               //
// Example: cupsOfCoffee(1) would return one verse                          //
//--------------------------------------------------------------------------//
function cupsOfCoffee (howManyCups) {
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
console.log ("|            Function cupsOfCoffee                   |");
console.log ("------------------------------------------------------");
console.log(cupsOfCoffee(5));
