const bluebird = require("bluebird");
const textMetrics = require("./textMetrics");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));

textMetrics.createMetrics("te st!");
