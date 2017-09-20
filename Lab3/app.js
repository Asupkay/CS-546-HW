const textMetrics = require("./textMetrics.js");
const fileData = require("./fileData.js");
const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));


async function processFile(path) {
    let resultPath = path + ".result.json";
    fileData.getFileAsJSON(resultPath).then((contents) => {
        console.log(contents);    
    }).catch((error) => {
        console.log("test");
        fileData.getFileAsString(path + ".txt").then((contents) => {
            fileData.saveStringToFile(path + ".debug.txt", textMetrics.simplify(contents)).then(() => {
                let textInfo = textMetrics.createMetrics(contents);
                fileData.saveJSONToFile(path + ".result.json", textInfo).then(() => {
                    console.log(textInfo);
                }).catch((error) => {
                    console.log("Error on saving JSON to file " + path + ".result.json");
                });
            }).catch((error) => {
                    console.log("Error on saving String to file " + path + ".debug.txt");
            });
        }).catch((error) => {
                    console.log("Error on getting file as String " + path + ".txt");
        });
    });
}

processFile("chapter1");
processFile("chapter2");
processFile("chapter3");
