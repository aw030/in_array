# in_array
Nodejs module in_array function similar to PHP function in_array().

## Example
    const in_array = require("@aw030/in_array");

    let str = "hallo2";
    let array = ["ciao", "hallo"];

    if (in_array(str, array)){
        console.log("str is in array!");
    }else{
        console.log("str is not in array!")
    }

