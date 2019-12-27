"use strict";

function safePawns(data){
    var count = 0;
    for(let pawn of data){
        const col = pawn[0];
        const row = pawn[1];
        
        const prevCol = String.fromCharCode(col.charCodeAt(0) - 1);
        const nextCol = String.fromCharCode(col.charCodeAt(0) + 1);
        const prevRow = parseInt(row)-1;
        const heroPawns = [prevCol+prevRow, nextCol+prevRow];
        const found = heroPawns.some(r=> data.includes(r));
        count += found ? 1: 0;
        
    }
    return count
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(safePawns(["b4", "d4", "f4", "c3", "e3", "g5", "d2"]), 6, "First");
    assert.equal(safePawns(["b4", "c4", "d4", "e4", "f4", "g4", "e5"]), 1, "Second");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

