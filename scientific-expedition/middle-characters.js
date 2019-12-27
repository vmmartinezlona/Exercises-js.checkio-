"use strict";

function middle(text) {
    var len = text.length;
    var median = Math.floor(len/2);
    return len%2 ? text[median] : text[median-1] + text[median];;
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(middle('example'))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(middle('example'), 'm')
    assert.equal(middle('test'), 'es')
    assert.equal(middle('very-very long sentence'), 'o')
    assert.equal(middle('I'), 'I')
    assert.equal(middle('no'), 'no')
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}

