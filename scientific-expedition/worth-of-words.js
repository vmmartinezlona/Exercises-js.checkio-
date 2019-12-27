var VALUES = {'e': 1,  'a': 1, 'i': 1, 'o': 1, 'n': 1, 'r': 1,
              't': 1,  'l': 1, 's': 1, 'u': 1, 'd': 2, 'g': 2,
              'b': 3,  'c': 3, 'm': 3, 'p': 3, 'f': 4, 'h': 4,
              'v': 4,  'w': 4, 'y': 4, 'k': 5, 'j': 8, 'x': 8,
              'q': 10, 'z': 10};

function worthOfWords(words) {
    
    /* No recursion solution
    var word;
    var score = 0;
    for(var i=0; i<words.length; i++){
        var actualScore = getWordScore(0, words[i]);
        if(score < actualScore){
            score = actualScore;
            word = words[i];
        }
    }*/
    
    return getWorthWord(0, words, '', 0, words.length);
}

function getWordScore(i, word){
    if(i >= word.length) return 0;
    return VALUES[word[i]] + getWordScore(i+1, word);
}

function getWorthWord(i, words, word, score, limit){
    if(i >= limit) return word;
    var actualScore = getWordScore(0, words[i]);
    if(score < actualScore){
        score = actualScore;
        word = words[i];
    }
    return getWorthWord(i+1, words, word, score, limit);
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(worthOfWords(['hi', 'quiz', 'bomb', 'president']))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(worthOfWords(['hi', 'quiz', 'bomb', 'president']), 'quiz')
    assert.equal(worthOfWords(['zero', 'one', 'two', 'three', 'four', 'five']), 'zero')
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}

