"use strict";

function threeWords(data) {
    data = data.split(' ');
    /* for(var i=0, count=0; i<data.length; i++, count ++){
        if(isNumber(data[i])){
            count = count > 3 ? count : 0;
        }
    }*/
    
    return countWords(data, 0, 0) >= 3 ? true : false;
}

function countWords(data, index, count){
    if(index >= data.length) return count;
    if(isNumber(data[index])){
        count = count > 3 ? count : 0;
    }
    return countWords(data, index+1, count+1)
}

function isNumber(text){
    return /\d/.test(text);
}


var assert = require('assert');

if (!global.is_checking) {
    assert.equal(threeWords("Hello World hello"), true, "1st example");
    assert.equal(threeWords("He is 123 man"), false, "2nd example");
    assert.equal(threeWords("one two 3 four five 6 seven eight 9 ten eleven 12"), false, "3rd example");
    assert.equal(threeWords("bla bla bla bla"), true, "4th example");
    assert.equal(threeWords("Hi"), false, "Letters");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

