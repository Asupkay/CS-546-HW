module.exports.simplify = function (text) {
    let simplifiedText = text.toLowerCase();
    simplifiedText = simplifiedText.replace(/[^\s\w]/g, '');
    simplifiedText = simplifiedText.replace(/\s/g, ' ');
    console.log(simplifiedText + "!!endoftext");
};

module.exports.createMetrics = function (text) {
    let simplifiedText = module.exports.simplify(text);
}
