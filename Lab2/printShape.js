//*-------------------------------------------------------*
//| Name: printShape.js                                   |
//| Description: provide several ways of printing shapes, |
//| each of a certain number of sizes                     |
//| Author: Alex Supkay                                   |
//| Pledge: I pledge my honor that I have abided by the   |
//| Stevens Honor System.                                 |
//*-------------------------------------------------------*

module.exports = {
    triangle: function(lines) {
        if(!(lines > 0) && lines !== 'number') {
            throw "Input must be a number more than 1";
        }
        triangle = "";
        for(let row = 0; row < lines; row++) {
            for(let cspace = lines - row; cspace > 0; cspace--) {
                triangle += " ";
            }
            triangle += "/";
            if(row == lines-1) {
                for(let spaces = row*2; spaces > 0; spaces--) {
                    triangle += "-";
                }
            } else {
                for(let spaces = row*2; spaces > 0; spaces--) {
                    triangle += " ";
                }
            }
            triangle += "\\\n";
        }
        console.log(triangle);
    },
    square: function(lines) {
        console.log(lines);
    },
    rhombus: function(lines) {
        console.log(lines);
    }
};
