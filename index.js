module.exports = function in_array( value, array ) {
    if (typeof value == "undefined" || value === null ) {
        throw new Error('Value empty'); 
    }
    
    if (typeof array == "undefined" || array === null || !Array.isArray(array)) {
        throw new Error('Not an array'); 
    }
    
    if (array.indexOf(value) !== -1 ) {
        return true;
    }
    
    return false;
};
