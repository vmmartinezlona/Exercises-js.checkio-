"use strict";

function digitsMultip(data) {
    var numberStr = data.toString()
    
    return multi(numberStr, 0, numberStr.length);
}

function multi(data, i, len){
    if(i >= len) return 1;
    if(len <= 0) return;
    
    var number = data[i++];
    if(number == 0) number = 1;
    return number * multi(data, i, len);
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(digitsMultip(123405))
    
    assert.equal(digitsMultip(123405), 120, "1st");
    assert.equal(digitsMultip(999), 729, "2nd");
    assert.equal(digitsMultip(1000), 1, "3rd");
    assert.equal(digitsMultip(1111), 1, "4th");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

