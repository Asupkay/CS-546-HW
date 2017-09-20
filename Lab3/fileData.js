const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));

async function getFileAsString(path) {
    if(!path) throw "You must provide a path";
    
    fs.readFileAsync(path, "utf8").then((contents) => {
        return contents;
    }).catch((error) => {
        console.error(e.stack);
    });
}

async function getFileAsJSON(path) {
    if(!path) throw "You must provide a path";
    
    fs.readFileAsync(path, "utf8").then((contents) => {
        return JSON.parse(contents);
    }).catch((error) => {
        console.error(e.stack);
    });
}

async function saveStringToFile(path, text) {
    if(!path || !text) throw "You must provide a path and text";

    fs.writeFile(path, text).then(() => {
        return true;
    }).catch((error) => {
        console.error(e.stack);
    });
}

async function saveJSONToFile(path, obj) {
    if(!path || !obj) throw "You must provide a path and obj";

    fs.writeFile(path, JSON.stringify(obj, null, 4)).then(() => {
        return true;
    }).catch((error) => {
        console.error(e.stack);
    });
}
