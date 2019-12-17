"use strict";

function mostNumbers(...numbers){
    if(numbers.length <= 0) return 0;
    var numArray = [];
    for (let i=0; i<numbers.length; i++) numArray.push(numbers[i]);
    
    numArray.sort(function(a, b){return a-b});    
    return numArray[numArray.length-1] - numArray[0];
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(mostNumbers(1, 2, 3), 2, "3-1=2");
    assert.equal(mostNumbers(5, -5), 10, "5-(-5)=10");
    assert.equal(Math.round(mostNumbers(10.2, -2.2, 0, 1.1, 0.5)*1000), 12400, "10.2-(-2.2)=12.4");
    assert.equal(mostNumbers(), 0, "Empty");
    assert.equal(mostNumbers(36,-26,-7.5,0.9,0.53,-6.6,-71,0.53,-48,57,69,0.063,-4.7,0.01,9.2), 140, "69.0-(-71.0)")
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

