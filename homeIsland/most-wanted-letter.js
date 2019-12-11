"use strict";

function mostWanted(data) {
    var lowerArray = data.toLowerCase();
    
    var letter = '';
    var count = 0;
    for(var i=0; i<lowerArray.length; i++){
        var char = lowerArray[i];
        var charCode = char.charCodeAt(0);
        if(charCode < 96 || charCode > 122) continue;
        if(letters.includes(char)) continue;
        
        if(count<getCharCount(char, lowerArray) || (count==getCharCount(char, lowerArray) && letter.charCodeAt(0) > charCode)){
            count = getCharCount(char, lowerArray);
            letter = char;
        }
    }
    
    return letter;
}

function getCharCount(char, word){
    var count = 0;
   for(var i=0; i<word.length; i++){
       if(word[i] == char){
           count++;
        }
   }
   return count;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(mostWanted("Hello World!"), "l", "1st example");
    assert.equal(mostWanted("How do you do?"), "o", "2nd example");
    assert.equal(mostWanted("One"), "e", "3rd example");
    assert.equal(mostWanted("Oops!"), "o", "4th example");
    assert.equal(mostWanted("AAaooo!!!!"), "a", "Letters");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
