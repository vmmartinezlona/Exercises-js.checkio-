"use strict";

function commonWords(first, second) {
    var firstArray = first.split(',');
    firstArray.sort();
    var secondArray = second.split(',');
    var result = '';
    
    for(var i=0; i<firstArray.length; i++){
        if(secondArray.includes(firstArray[i])){
            result += firstArray[i] + ',';
        }
    }

    if(result[result.length-1] === ',') result = result.slice(0, result.length-1);

    return result;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(commonWords("hello,world", "hello,earth"), "hello", "Hello");
    assert.equal(commonWords("one,two,three", "four,five,six"), "", "Too different");
    assert.equal(commonWords("one,two,three", "four,five,one,two,six,three"), "one,three,two", "1 2 3");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

