"use strict";

function firstWord(a, b) {
    a = a.split(/\.| ,| /);
    
    var firstWord = getFirstWord(a, 0);
    var wordLen = firstWord.length;
    var lastChar = firstWord.charCodeAt(wordLen-1)
    firstWord = lastChar < 61 || lastChar > 122 ? firstWord.slice(0, wordLen-1) : firstWord;
    
    return firstWord;
}

function getFirstWord(data, index){
    if(index >= data.length) return;
    if(data[index].length > 0 && isWord(data[index])) return data[index];
    return getFirstWord(data, index+1);    
}

function isWord(word){
    var isNumber = /[0-9]/.test(word);
    var isSpecialCharacters = /(\..*|,,*){2,}/.test(word);
    return !(isNumber || isSpecialCharacters);
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(firstWord("Hello world"))

    // These "asserts" using for self-checking and not for auto-testing
    assert.equal(firstWord("Hello world"), "Hello")
    assert.equal(firstWord(" a word "), "a")
    assert.equal(firstWord("don't touch it"), "don't")
    assert.equal(firstWord("greetings, friends"), "greetings")
    assert.equal(firstWord("... and so on ..."), "and")
    assert.equal(firstWord("hi"), "hi")
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}
