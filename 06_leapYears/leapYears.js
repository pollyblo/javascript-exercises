const leapYears = function(century) {
    if((century % 4 === 0 && century % 100 != 0) || century % 400 === 0) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
