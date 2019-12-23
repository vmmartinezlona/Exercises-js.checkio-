"use strict";

function numberRadix(str_number, radix){
    var len = str_number.length - 1;
    
    var number = 0;
    for(var i=len; i>=0; i--){
        var digit = isLetter(str_number, i) ? getNumberValue(str_number, i) : str_number[i];
        if(!isConvertible(digit, radix)){
            number = -1;
            break;
        }
        number += digit*Math.pow(radix, len-i);
    }
    return number;
}


function isLetter(str_number, index){
    return str_number.charCodeAt(index) >= 65 && str_number.charCodeAt(index) <= 90;
}

function getNumberValue(str_number, index){
    return str_number.charCodeAt(index) - 55;
}

function isConvertible(digit, radix){
    return digit < radix;

}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(numberRadix("AF", 16), 175, "Hex");
    assert.equal(numberRadix("101", 2), 5, "Bin");
    assert.equal(numberRadix("101", 5), 26, "5 base");
    assert.equal(numberRadix("Z", 36), 35, "Z base");
    assert.equal(numberRadix("AB", 10), -1, "B > A > 10");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

