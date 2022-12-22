const reverseString = function(char) {
    let stringReversed = "";
    for(let i = char.length - 1; i >= 0; i--) {
        stringReversed += char[i];
    }
    return stringReversed;
}

// Do not edit below this line
module.exports = reverseString;
