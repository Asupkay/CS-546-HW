const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));

module.exports.getFileAsString = async function getFileAsString(path) {
    if(!path) throw "You must provide a path";
    
    try { 
        let content = await fs.readFileAsync(path, "utf8");
        return content;
    } catch (error) {
        throw error;
    }
}

module.exports.getFileAsJSON = async function getFileAsJSON(path) {
    if(!path) throw "You must provide a path";
    try { 
        let content = await fs.readFileAsync(path, "utf8");
        return content;
    } catch (error) {
        throw error;
    }
}

module.exports.saveStringToFile = async function saveStringToFile(path, text) {
    if(!path || !text) throw "You must provide a path and text";

    try {
        await fs.writeFileAsync(path, text);
        return true;
    } catch (error) {
        throw error;
    }
}

module.exports.saveJSONToFile = async function saveJSONToFile(path, obj) {
    if(!path || !obj) throw "You must provide a path and obj";

    try {
        await fs.writeFileAsync(path, JSON.stringify(obj, null, 4));
        return true;
    } catch (error) {
        throw error;
    }
}
