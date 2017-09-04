
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
    
    //Make sure the amount of arguments matches the function arguments
    if(arguments.length != sumOfSquares.length) {
        throw "requires 3 arguments sumOfSquares(num1,num2,num3)";
    }

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
console.log("sumOfSquares of .4, .9, and 1.5: " + sumOfSquares(.4, .9, 1.5));
console.log("sumOfSquares of -1, -3, and 5: " + sumOfSquares(-1, -3, 5));
//sumOfSquares(1);
//sumOfSquares(1,2,3,4);
//sumOfSquares("1","2","3");

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
    //If there are too many or too few arguments throw error
    if(arguments.length <= 3 && arguments.length >= 1) {
        //If there is only a first name 
        if (typeof lastName === 'undefined') {
            //Check that name is a string and is not a number
            if(typeof firstName == 'string' && isNaN(firstName)) {
                console.log("Hello, " + firstName + "!");
            } else {
                throw "The names must be strings.";
            }
        //If there is a first name and last name
        } else if (typeof title === 'undefined') {
            //check that the first and last name are strings and are not a number
            if(typeof firstName == 'string' && typeof lastName == 'string' && isNaN(firstName) && isNaN(lastName)) {
                console.log("Hello, " + firstName + " " + lastName + ". I hope you are having a good day!");
            } else {
                throw "The names must be strings.";
            }
        //If everything is there
        } else {
            //check that the first, last, and title are strings and not a number
            if(typeof firstName == 'string' && typeof lastName == 'string' && typeof title == 'string' && isNaN(firstName) && isNaN(lastName) && isNaN(title)) {
                console.log("Hello, " + title + " " + firstName + " " + lastName + "! Have a good evening!");
            } else {
                throw "Names and title must be strings.";
            }
        }
    } else {
        throw "the function sayHelloTo requires atleast one parameter and less than four sayHelloTo(firstName, lastName (optional), title (optional))";
    }
}

console.log ("------------------------------------------------------");
console.log ("|             Function sayHelloTo                    |");
console.log ("------------------------------------------------------");
//sayHelloTo();
//sayHelloTo("1");
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
    
    //Make sure the amount of arguments matches the function arguments
    if(arguments.length != cupsOfCoffee.length) {
        throw "requires 1 arguments cupsOfCoffee(howManyCups)";
    }

    //Make sure howManyCups is a number
    if(Number.isInteger(howManyCups) && howManyCups > 0) {
        let verse = "";
        //Loop through all cups
        for(let remainingCups = howManyCups; remainingCups > 0; remainingCups--) {
            //If you are on the last cup else do a regular verse
            if(remainingCups == 1) {
                verse = verse + `${remainingCups} cup of coffee on the desk! ${remainingCups} cup of coffee!\nPick it up, drink the cup, no more coffee left on the desk!`
            } else {
                verse = verse + `${remainingCups} cups of coffee on the desk! ${remainingCups} cups of coffee!\nPick one up, drink the cup, ${remainingCups - 1} cups of coffee on the desk!\n\n`;
            } 
        }
        return verse;
    } else {
        throw "parameter for cupsOfCoffee must be an integer number larger than 0";
    }
}

console.log ("------------------------------------------------------");
console.log ("|            Function cupsOfCoffee                   |");
console.log ("------------------------------------------------------");
console.log(cupsOfCoffee(5));
console.log("---------------------------------");
console.log(cupsOfCoffee(1));
//console.log(cupsOfCoffee(0));
//console.log(cupsOfCoffee(-3));
//console.log(cupsOfCoffee(5.5));
//console.log(cupsOfCoffee("5"));
//console.log(cupsOfCoffee("nice"));

//--------------------------------------------------------------------------//
// Function: occurrencesOfSubstring                                         //
// Parameters: fullString, substring                                        //
// Description: calculate how many times a substring occurs in a            //
// given string.                                                            //
// Example: occurrencesOfSubstring("hello world", "o"); should return 2     //
// occurrencesOfSubstring("Helllllllo, class!", "ll"); should return 6      //
//--------------------------------------------------------------------------//
function occurencesOfSubstring (fullString, substring) {

    //Make sure the amount of arguments matches the function arguments
    if(arguments.length != occurencesOfSubstring.length) {
        throw "requires 2 arguments occurencesOfSubstring(fullString, substring)";
    }

    //Make sure fullstring and substring are strings
    if(typeof fullString == 'string' && typeof substring == 'string') {
        let occurences = 0;
        let cLetter = 0;
        //While the current letter is less than the full string and the current position plus our substring length is not too long
        while(cLetter < fullString.length && cLetter + substring.length <= fullString.length) {
            let matches = true;
            let chLetter = cLetter;
            //While the checked letter is less then the length of substring and they are still matching
            while(chLetter - cLetter < substring.length && matches == true) {
                //Check that the position on the fullstring and substring match if not break
                if(fullString[chLetter] != substring[chLetter-cLetter]) {
                    matches = false;
                }
                chLetter++;    
            }
            //If they are still matching at the end increment occurences
            if(matches == true) {
                occurences++;
            }
            //Go to the next letter
            cLetter++;
        }
        return occurences;
    } else {
        throw "The fullstring and substring must be strings";
    }
}

console.log ("------------------------------------------------------");
console.log ("|            Function occurencesOfSubstring          |");
console.log ("------------------------------------------------------");
console.log("In the fullstring 'hello world' there were " + occurencesOfSubstring("hello world","o") + " occurences of 'o'.");
console.log("In the fullstring 'Helllllllo, class!' there were " + occurencesOfSubstring("Helllllllo, class!", "ll") + " occurences of substring 'll'");
console.log("In the fullstring 'nice job' there were " + occurencesOfSubstring("nice job", "z") + " occurences of substring 'z'");
console.log("In the fullstring '54321' there were " + occurencesOfSubstring("54321", "1") + " occurences of substring '1'");
//occurencesOfSubstring(1,2);
//console.log(occurencesOfSubstring("1","1","3"));
 
//--------------------------------------------------------------------------//
// Function: randomizeSentences                                             //
// Parameters: paragraph                                                    //
// Description: take in a paragraph and randomize the sentences in it.      //
// Example: randomizeSentences("a? b. c!") = "b. a? c!"                     //
//--------------------------------------------------------------------------//

function randomizeSentences (paragraph) {

    //Make sure the amount of arguments matches the function arguments
    if(arguments.length != randomizeSentences.length) {
        throw "requires 1 arguments randomizeSentences(paragraph)";
    }
    
    //check that paragraph is a string
    if(typeof paragraph == 'string') {
        //Make an array for the split up sentences
        let sentences = [];
        let sentence = "";
        //Add a space to the beginning of the paragraph so that when that sentence is mixed it isn't a problem
        paragraph = " " + paragraph
    
        //Go through the letters till the end of the paragraph checking for punctuation
        for(let cLetter = 0; cLetter < paragraph.length; cLetter++) {
            //Construct the sentence over time
            sentence = sentence + paragraph[cLetter];

            //If it is punctuation push the sentence onto the array and clear the current sentence
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
        
        //Catch to make sure that if the sentence did not end we still push it
        if(sentence != "") {
            sentences.push(sentence);
        }
    
        //Mix the sentences array
        sentences = mixSentences(sentences);
    
        //Join them back together
        let mSentence = sentences.join("");

        //remove the first character if it is a space (Should always be technically.)
        if(mSentence.charAt(0) === ' ') {
            mSentence = mSentence.substr(1);
        }
        return mSentence;
    } else {
        throw "argument of randomizeSentences must be a string."
    }
}

//Helper for mixing the sentences
function mixSentences(sentences) {
    let cSentence = sentences.length;
    let tempHolder;
    let randomSentence;

    // While there is still sentences to shuffle
    while (cSentence !== 0) {

        // Pick one of the sentences
        randomSentence = Math.floor(Math.random() * cSentence);
        cSentence -= 1;

        // swap the random elements with the current element
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
console.log("Randomization of sentence 'A': " + randomizeSentences("A"));
//randomizeSentences("A","B");
//randomizeSentences(5);
//console.log(randomizeSentences('').length);
