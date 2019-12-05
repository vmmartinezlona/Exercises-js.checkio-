"use strict";

function nonUniqueElements(data) {
    var newArray=[];

    for(var i=0; i<data.length; i++){
        for(var j=0; j<data.length; j++){
            if(i !== j && data[i] == data[j]){
                newArray.push(data[i]);
                break;
            }
        }
    }
    return newArray;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(nonUniqueElements([1, 2, 3, 1, 3]), [1, 3, 1, 3], "1st example");
    assert.deepEqual(nonUniqueElements([1, 2, 3, 4, 5]), [], "2nd example");
    assert.deepEqual(nonUniqueElements([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5], "3rd example");
    assert.deepEqual(nonUniqueElements([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9], "4th example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
