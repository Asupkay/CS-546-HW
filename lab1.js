
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

//--------------------------------------------------------------------------//
// Function: occurrencesOfSubstring                                         //
// Parameters: fullString, substring                                        //
// Description: calculate how many times a substring occurs in a            //
// given string.                                                            //
// Example: occurrencesOfSubstring("hello world", "o"); should return 2     //
// occurrencesOfSubstring("Helllllllo, class!", "ll"); should return 6      //
//--------------------------------------------------------------------------//

function occurencesOfSubstring (fullString, substring) {
    let occurences = 0;
    for(let cLetter = 0; cLetter < fullString.length && cLetter + substring.length <= fullString.length; cLetter++) {
        let matches = true
        for(let chLetter = cLetter; chLetter - cLetter < substring.length && matches == true; chLetter++) {
            if(fullString[chLetter] != substring[chLetter-cLetter]) {
                matches = false;
            }    
        }
        if(matches == true) {
            occurences++;
        }
    }
    return occurences;
}

console.log ("------------------------------------------------------");
console.log ("|            Function occurencesOfSubstring          |");
console.log ("------------------------------------------------------");
console.log("In the fullstring 'hello world' there were " + occurencesOfSubstring("hello world","o") + " occurences of 'o'.");
console.log("In the fullstring 'Helllllllo, class!' there were " + occurencesOfSubstring("Helllllllo, class!", "ll") + " occurences of substring 'll'");
 
//--------------------------------------------------------------------------//
// Function: randomizeSentences                                             //
// Parameters: paragraph                                                    //
// Description: take in a paragraph and randomize the sentences in it.      //
// Example: randomizeSentences("a? b. c!") = "b. a? c!"                     //
//--------------------------------------------------------------------------//

function randomizeSentences (paragraph) {
    let sentences = [];
    let sentence = "";
    paragraph = " " + paragraph
    
    for(let cLetter = 0; cLetter < paragraph.length; cLetter++) {
        sentence = sentence + paragraph[cLetter];
        if(paragraph[cLetter] == ".") {
            sentences.push(sentence);
            sentence = "";
        } else if(paragraph[cLetter] == "?") {
            sentences.push(sentence);
            sentence = "";
        } else if(paragraph[cLetter] == "!") {
            sentences.push(sentence);
            sentence = "";
        }
    }
    
    sentences = mixSentences(sentences);
    
    let mSentence = sentences.join("");
    if(mSentence.charAt(0) === ' ') {
        mSentence = mSentence.substr(1);
    }
    return mSentence;
}

function mixSentences(sentences) {
    let cSentence = sentences.length;
    let tempHolder;
    let randomSentence;

    // While there remain elements to shuffle...
    while (cSentence !== 0) {

        // Pick a remaining element...
        randomSentence = Math.floor(Math.random() * cSentence);
        cSentence -= 1;

        // And swap it with the current element.
        tempHolder = sentences[cSentence];
        sentences[cSentence] = sentences[randomSentence];
        sentences[randomSentence] = tempHolder;
    }

    return sentences;
}

console.log ("------------------------------------------------------");
console.log ("|            Function randomizeSentences             |");
console.log ("------------------------------------------------------");
console.log("Randomization of sentence 'a? b. c!': '" + randomizeSentences("a? b. c!") + "'");
console.log("Randomization of sentence 'a? b. c!': '" + randomizeSentences("a? b. c!") + "'");

var paragraph = "Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations.";

console.log("Randomization of sentence '" + paragraph + "': \n" + randomizeSentences(paragraph));
