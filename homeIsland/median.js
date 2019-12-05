"use strict";

function median(data) {    
    data.sort((a,b) => a - b);
    //data.reverse()
    var len = data.length;
    var index = len/2;
    console.log('data', data)
    if(len%2){
        return data[Math.floor(index)];
    }else{
        console.log((data[index]+data[index+1]))
        return (data[index]+data[index-1])/2;
    }
    //3, 6, 20, 99, 10, 15
    //3, 6, 10, 15, 20, 99
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(median([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), 3, "1st example");
    assert.equal(median([3, 1, 2, 5, 3]), 3, "2nd example");
    assert.equal(median([1, 300, 2, 200, 1]), 2, "3rd example");
    assert.equal(median([3, 6, 20, 99, 10, 15]), 12.5, "4th example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
