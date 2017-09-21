/**----------------------------------------------------*
/ Name: textMetrics.js                                 |
/ Project: Lab3                                        |
/ Author: Alex Supkay                                  |
/ Pledge: I pledge my honor that I have abided by the  |
/ Stevens Honor System                                 |
/-----------------------------------------------------*/

//Simplifies the text by putting it to lower case, removing any symbols, and turning any whitspace to one space
module.exports.simplify = function (text) {
    if(!text || typeof text != 'string') throw "text for simplify must be a string and exist";

    let simplifiedText = text.toLowerCase();
    simplifiedText = simplifiedText.replace(/[^\s\w]/g, '');
    simplifiedText = simplifiedText.replace(/\s/g, ' ');
    simplifiedText = simplifiedText.replace(/  +/g, ' ');
    return simplifiedText;
};

//Compiled together the metrics into a JSON object and returns it
module.exports.createMetrics = function (text) {
    if(!text || typeof text != 'string') throw "text for createMetrics must be a string and exist";

    let simplifiedText = module.exports.simplify(text);
    let totalLetters = simplCountLetters(simplifiedText);
    let totalWords = simplCountWords(simplifiedText);
    let uniqueWords = simplCountUniqueWords(simplifiedText);
    let longWords = simplCountLongWords(simplifiedText);
    let averageWordLength = simplAverageWordLength(simplifiedText);
    let wordOccurrences = simplWordOccurrences(simplifiedText);
    textMetricObj = { 
        totalLetters: totalLetters,
        totalWords: totalWords,
        uniqueWords: uniqueWords,
        longWords: longWords,
        averageWordLength: averageWordLength,
        wordOccurrences: wordOccurrences
    } 
    return textMetricObj;
}

//Count the letters by removing all white space and getting the length
function simplCountLetters(simpleText) {
    simpleText = simpleText.replace(/\s/g, '');
    return simpleText.length;
}

//Get the word count by turning the words into an array and getting the length of that array
function simplCountWords(simpleText) {
    let wordArray = arraySimpleText(simpleText);
    let amountOfWords = wordArray.length;
    return amountOfWords;
}

//Count the number of unique words by creating a dictionary and getting the length
function simplCountUniqueWords(simpleText) {
    let wordArray = arraySimpleText(simpleText);   
    let wordDictionary = simplWordOccurrences(simpleText);
    
    return Object.keys(wordDictionary).length; 
}

//Make an array and loop through it checking the length of each word
function simplCountLongWords(simpleText) {
    let wordArray = arraySimpleText(simpleText);
    let wordCount = 0;

    for(let i = 0; i < wordArray.length; i++) {
        if(wordArray[i].length >= 6){
            wordCount++;
        }
    }

    return wordCount;
}

//Divide the number of letter by the number of words
function simplAverageWordLength(simpleText) {
    let avgLetters = simplCountLetters(simpleText)/simplCountWords(simpleText);
    return avgLetters;
}

//Create a dictionary of the words and add one anytime it shows up
function simplWordOccurrences(simpleText) {
    let wordOccurences = { };
    let wordArray = arraySimpleText(simpleText);

    for(let i = 0; i < wordArray.length; i++) {
        wordOccurences[wordArray[i]] = (wordOccurences[wordArray[i]] || 0) + 1;
    }
    return wordOccurences;
}

//Create a simplified array where there are no empty entries
function arraySimpleText(simpleText) {
    let wordArray = simpleText.split(' ');
    let amountOfWords = wordArray.length;    
    
    if(wordArray[amountOfWords-1] == '') {
        wordArray = wordArray.slice(0, amountOfWords-1);
    } 
    if(wordArray[0] == '') {
        wordArray = wordArray.slice(1);
    }

    return wordArray;
}
