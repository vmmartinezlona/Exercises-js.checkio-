"use strict";

function findMessage(data) {
    return getMessage(0, data, data.length-1);
}

function getMessage(index, data, limit){
    if(index > limit) return '';
    var charCode = data.charCodeAt(index);
    if(charCode >= 65 && charCode <= 90){
        return data[index] + getMessage(index+1, data, limit);
    }
    return getMessage(index+1, data, limit);
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(findMessage("How are you? Eh, ok. Low or Lower? Ohhh."))
    
    assert.equal(findMessage("How are you? Eh, ok. Low or Lower? Ohhh."), "HELLO", "hello");
    assert.equal(findMessage("hello world!"), "", "Nothing");
    assert.equal(findMessage("HELLO WORLD!!!"), "HELLOWORLD", "Capitals");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

