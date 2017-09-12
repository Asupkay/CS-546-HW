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
        //Check that the input is valid
        if(!(lines > 0) || typeof lines !== 'number') {
            throw "Input must be a number more than 0";
        }
        //This will be the variable where the string is construted
        triangle = "";
        //Go for every row
        for(let row = 0; row < lines; row++) {
            //Add coushining spaces so that the lines line up
            for(let cspace = lines - row; cspace > 0; cspace--) {
                triangle += " ";
            }
            //This is the start slash
            triangle += "/";
            //Check if it is the last row if it is use - if not use spaces
            if(row == lines-1) {
                for(let spaces = row*2; spaces > 0; spaces--) {
                    triangle += "-";
                }
            } else {
                for(let spaces = row*2; spaces > 0; spaces--) {
                    triangle += " ";
                }
            }
            //Close the triangle and add a new line
            triangle += "\\\n";
        }
        //print the triangle
        console.log(triangle);
    },
    square: function(lines) {
        //Check that the input is valid
        if(!(lines > 1) || typeof lines !== 'number') {
            throw "Input must be a number more than 1";
        }
        //String for holding the constructed string
        square = "";
        //Construct each row
        for(let row = 0; row < lines; row++) {
            //Start the row
            square += "|";
            //If it is the first or last row use - if not use spaces
            if(row == 0 || row == lines-1) {
                for(let column = 0; column < lines; column++) {
                    square += '-';
                }
            } else {
                for(let column = 0; column < lines; column++) {
                    square += ' ';
                }
            }
            //End the row and make a new line
            square += "|\n";
        }
        //print the triangle
        console.log(square);
    },
    rhombus: function(lines) {
        //Check that the input is valid (even, more than one, and a number)
        if(!(lines > 1) || lines%2 != 0 || typeof lines !== 'number') {
            throw "Input must be a number more than 1 and divisable by 2";
        }
        //String for holding the constructed string
        rhombus = ""  
        //Construct the top half of the rhombus
        for(let topHalfRow = 0; topHalfRow < lines/2; topHalfRow++) {
            //Create the spaces needed for lining up
            for(let cspace = lines/2 - (topHalfRow + 1); cspace > 0; cspace--) {
                rhombus += " ";
            }
            //Open the rhombus
            rhombus += '/';   
            //If it is the first row put a - if not put the proper amount of spaces
            if(topHalfRow == 0) {
                rhombus += '-';
            } else {
                for(let spaces = 0; spaces < topHalfRow * 2 + 1; spaces++) {
                    rhombus += ' ';
                } 
            }
            //Close the row of the rhombus and new line
            rhombus += '\\\n'; 
        }
        //Construct the bottom half of the rhombus
        for(let lowerHalfRow = (lines/2) - 1; lowerHalfRow >= 0; lowerHalfRow--) {
            //Buffer spaces
            for(let cspace = lines/2 - (lowerHalfRow + 1); cspace > 0; cspace--) {
                rhombus += " ";
            }
            //Open rhombus
            rhombus += '\\';
            //if it is the last row use - if not use space
            if(lowerHalfRow == 0) {
                rhombus += '-';
            } else {
                for(let spaces = 0; spaces < lowerHalfRow * 2 + 1; spaces++) {
                    rhombus += ' ';
                }
            }
            //Close row
            rhombus += '/\n';
        }
        console.log(rhombus);
    }
};
