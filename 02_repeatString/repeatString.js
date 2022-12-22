const repeatString = function(repeatedString, nbrOfRep) {
    let storedString = "";

    if(nbrOfRep < 0) {
        return 'ERROR';
    } else {
        for(let i = 0; i < nbrOfRep; i++) {
            storedString += repeatedString;
        }    
    }
    return storedString;
};

// Do not edit below this line
module.exports = repeatString;
