module.exports.simplify = function (text) {
    let simplifiedText = text.toLowerCase();
    simplifiedText = simplifiedText.replace(/[^\s\w]/g, '');
    simplifiedText = simplifiedText.replace(/\s/g, ' ');
    simplifiedText = simplifiedText.replace(/  +/g, ' ');
    return simplifiedText;
};

module.exports.createMetrics = function (text) {
    let simplifiedText = module.exports.simplify(text);
    return simplifiedText;
}
