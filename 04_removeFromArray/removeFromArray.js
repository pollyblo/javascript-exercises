const removeFromArray = function(...args) {
    const array = args[0];
    return array.filter(key => (!args.includes(key)));
};

// Do not edit below this line
module.exports = removeFromArray;
