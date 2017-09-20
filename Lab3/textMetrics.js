module.exports.simplify = function (text) {
    let simplifiedText = text.toLowerCase();
    simplifiedText = simplifiedText.replace(/[^\s\w]/g, '');
    simplifiedText = simplifiedText.replace(/\s/g, ' ');
    simplifiedText = simplifiedText.replace(/  +/g, ' ');
    return simplifiedText;
};

module.exports.createMetrics = function (text) {
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

function simplCountLetters(simpleText) {
    simpleText = simpleText.replace(/\s/g, '');
    return simpleText.length;
}

function simplCountWords(simpleText) {
    let wordArray = arraySimpleText(simpleText);
    let amountOfWords = wordArray.length;
    return amountOfWords;
}

function simplCountUniqueWords(simpleText) {
    let wordArray = arraySimpleText(simpleText);   
    let wordDictionary = simplWordOccurrences(simpleText);
    
    return Object.keys(wordDictionary).length; 
}

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

function simplAverageWordLength(simpleText) {
    let avgLetters = simplCountLetters(simpleText)/simplCountWords(simpleText);
    return avgLetters;
}

function simplWordOccurrences(simpleText) {
    let wordOccurences = { };
    let wordArray = arraySimpleText(simpleText);

    for(let i = 0; i < wordArray.length; i++) {
        wordOccurences[wordArray[i]] = (wordOccurences[wordArray[i]] || 0) + 1;
    }
    return wordOccurences;
}

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
