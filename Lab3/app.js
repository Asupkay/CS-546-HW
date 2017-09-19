const bluebird = require("bluebird");
const textMetrics = require("./textMetrics");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));

console.log(textMetrics.createMetrics("te st!\n\t?.!\',\"\'"));
