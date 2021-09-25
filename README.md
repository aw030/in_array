# in_array
Nodejs module in_array function similar to PHP function in_array().

## Example
    const in_array = require("@aw030/in_array");

    let needle = "needle";
    let haystack = ["needle", "noodle"];

    if (in_array(needle, haystack)){
        console.log("str is in array!");
    }else{
        console.log("str is not in array!")
    }

