const sumAll = function(fstNbr, scdNbr) {
    let sum = 0;
    const highestNbr = fstNbr > scdNbr ? fstNbr : scdNbr;
    const lowestNbr = fstNbr > scdNbr ? scdNbr : fstNbr;

    if(fstNbr < 0 || scdNbr < 0) {
        return 'ERROR';
    } else if(typeof fstNbr != 'number' || typeof scdNbr != 'number') {
        return 'ERROR';
    } else {
        sum = ((highestNbr - lowestNbr) + 1) * (lowestNbr + highestNbr) / 2;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
