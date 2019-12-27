"use strict";

function isAscending(items) {
    console.log('---------------', items)
    for(var i=0; i<items.length; i++){
        for(var j=i+1; j<items.length; j++){
            console.log(items[i], items[j])
            if(items[i] >= items[j]) return false;
        }
    }
    return true;
}


var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(isAscending([-5, 10, 99, 123456]))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(isAscending([-5, 10, 99, 123456]), true)
    assert.equal(isAscending([99]), true)
    assert.equal(isAscending([4, 5, 6, 7, 3, 7, 9]), false)
    assert.equal(isAscending([]), true)
    assert.equal(isAscending([1, 1, 1, 1]), false)
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}
