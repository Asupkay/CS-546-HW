const textMetrics = require("./textMetrics.js");
const fileData = require("./fileData.js");
const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));


async function processFile(path) {
    let resultPath = path + ".result.json";
    fs.accessAsync(path).then(() => {
        //Some type of error running this even though no filE
        fileData.getFileAsJSON(resultPath).then((contents) => {
            console.log(contents);
        });
    }).catch((error) => {
        fileData.getFileAsString(path).then((contents) => {
            fileData.saveStringtoFile(path + ".debug.txt", textMetrics.simplify(contents)).then(() => {
                let textInfo = textMetrics.createMetrics(contents);
                fileData.saveJSONtoFile(path + ".result.json", textInfo).then(() => {
                    console.log(textInfo);
                });
            });
        });
    });
}

processFile("chapter1.txt");
processFile("chapter2.txt");
processFile("chapter3.txt");
