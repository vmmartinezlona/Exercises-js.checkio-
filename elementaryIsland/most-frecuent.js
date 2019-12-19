"use strict";

function mostFrequent(data) {
    data.sort();
        
    var count = 0;
    var character = data[0];
    var auxChar = character;
    var auxCount = count;
    for(var i=0; i<data.length; i++){
        console.log(auxChar, data[i])
        if(data[i] == auxChar && i<data.length-1){
            auxCount++;
        } else {
            if(count < auxCount){
                count = auxCount;
                character = auxChar;
            }
            auxCount = 2;
            auxChar = data[i];
        }
    }
    
    if(count < auxCount){
        count = auxCount;
        character = auxChar;
    }
    
    return character;
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(mostFrequent([
        'a', 'b', 'c', 
        'a', 'b',
        'a'
    ]))
    
    assert.equal(mostFrequent([
        'a', 'b', 'c', 
        'a', 'b',
        'a'
    ]), 'a')
    assert.equal(mostFrequent(['a', 'a', 'bi', 'bi', 'bi']), 'bi')
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

