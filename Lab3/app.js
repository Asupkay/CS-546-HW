/**----------------------------------------------------*
/ Name: app.js                                         |
/ Project: Lab3                                        |
/ Author: Alex Supkay                                  |
/ Pledge: I pledge my honor that I have abided by the  |
/ Stevens Honor System                                 |
/-----------------------------------------------------*/

const textMetrics = require("./textMetrics.js");
const fileData = require("./fileData.js");

//Process the file
async function processFile(path) {
    //Check the path variable
    if(path && typeof path == 'string') {
        let resultPath = path + ".result.json";
        //See if there is already a results file for the text file
        fileData.getFileAsJSON(resultPath).then((contents) => {
            console.log(resultPath + " was found:");
            console.log(contents);    
        }).catch((error) => {
            //If there was not a result file or it wasn't in JSON attempt to create one
            console.log(error.message);
            console.log(resultPath + " was not found or was not a JSON object. Attempting to create.");
            //Try to get the txt file of the path
            fileData.getFileAsString(path + ".txt").then((contents) => {
                console.log(path + ".txt found. Attempting to create debug simplify file of it.");
                //Save the simplified string to debug for troubleshooting
                fileData.saveStringToFile(path + ".debug.txt", textMetrics.simplify(contents)).then((success) => {
                    console.log(path + ".debug.txt created. Attempting to create metrics and store in file.");
                    let textInfo = textMetrics.createMetrics(contents);
                    //Try to put the metric data into a file
                    fileData.saveJSONToFile(path + ".result.json", textInfo).then((success) => {
                        console.log(path + ".result.json created. Here it is: "); 
                        console.log(textInfo);
                    }).catch((error) => {
                        console.log(error.message);
                        console.log("Error on saving JSON to file " + path + ".result.json");
                    });
                }).catch((error) => {
                    console.log(error.message);
                    console.log("Error on saving String to file " + path + ".debug.txt");
                });
            }).catch((error) => {
                console.log(error.message);
                console.log("Error on getting file as String " + path + ".txt");
            });
        });
    } else {
        console.log("Path must exist and be a string.");
    }
}

try {
    //processFile();
    //processFile("Cahpter");
    processFile("chapter1");
    processFile("chapter2");
    processFile("chapter3");
    //processFile(3);
    console.log("===========Text Metrics Example================="); 
    console.log(textMetrics.createMetrics("Hello, my -! This is a great day to say hello.\n\n\tHello! 2 3 4 23"));
    console.log("================================================"); 
} catch (error) {
    console.log(error.stack);
}
