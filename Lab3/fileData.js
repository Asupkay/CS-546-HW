/**----------------------------------------------------*
/ Name: fileData.js                                    |
/ Project: Lab3                                        |
/ Author: Alex Supkay                                  |
/ Pledge: I pledge my honor that I have abided by the  |
/ Stevens Honor System                                 |
/-----------------------------------------------------*/

const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));

//Get the file as a string
module.exports.getFileAsString = async function getFileAsString(path) {
    if(!path) throw "You must provide a path";
    
    try { 
        let content = await fs.readFileAsync(path, "utf8");
        return content;
    } catch (error) {
        throw error;
    }
}

//Get the file as a json object
module.exports.getFileAsJSON = async function getFileAsJSON(path) {
    if(!path) throw "You must provide a path";
    try { 
        let content = await fs.readFileAsync(path, "utf8");
        return JSON.parse(content);
    } catch (error) {
        throw error;
    }
}

//Save file as a string to file
module.exports.saveStringToFile = async function saveStringToFile(path, text) {
    if(!path || !text) throw "You must provide a path and text";

    try {
        await fs.writeFileAsync(path, text);
        return true;
    } catch (error) {
        throw error;
    }
}

//SAve file as a string to file
module.exports.saveJSONToFile = async function saveJSONToFile(path, obj) {
    if(!path || !obj) throw "You must provide a path and obj";

    try {
        await fs.writeFileAsync(path, JSON.stringify(obj, null, 4));
        return true;
    } catch (error) {
        throw error;
    }
}
