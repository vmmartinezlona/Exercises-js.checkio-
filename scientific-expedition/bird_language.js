"use strict";

const VOWELS = "aeiouy"

function translate(phrase){
    
    var realPhrase = '';
    
    for(var i=0; i<phrase.length; i++){
        realPhrase += phrase[i];
        if(!isVowel(phrase[i]) && !isWhitespace(phrase[i])){
            i++;
        } else if(isVowel(phrase[i]) && !isWhitespace(phrase[i])){
            i += 2;
        }
    }
    
    return realPhrase;
}

function isVowel (letter){
    var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    return vowels.includes(letter);
}

function isWhitespace(letter){
    return letter === ' ';
}



var assert = require('assert');

if (!global.is_checking) {
	console.log("Example:")
	console.log(translate("hieeelalaooo"))
	
    assert.equal(translate("hieeelalaooo"), "hello", "Hi!");
    assert.equal(translate("hoooowe yyyooouuu duoooiiine"), "how you doin", "Joey?");
    assert.equal(translate("aaa bo cy da eee fe"), "a b c d e f", "Alphabet");
    assert.equal(translate("sooooso aaaaaaaaa"), "sos aaa", "Mayday, mayday");

    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
