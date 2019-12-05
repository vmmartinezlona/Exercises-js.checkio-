"use strict";

function countNeighbours(data, row, col) {
    var w = data[0].length;
    var h = data.length;
    
    console.log(w, h)
    
    var minRow = row - 1; var plusRow = row + 1;
    var minCol = col - 1; var plusCol = col + 1;
    
    var count = data[row][col] == 1 ? -1 : 0;
    console.log("----------------")
    for(var i=minRow; i<=plusRow; i++){
        for(var j=minCol; j<=plusCol; j++){
            if(h-1 >= i && i >= 0 && w-1 >= j && j >= 0 && data[i][j] == 1){
                //console.log(i, j)
                count++;
            }
        }
    }
    
    console.log(count)
    return count;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(countNeighbours([[1,0,1,0,1],
                                  [0,1,0,1,0],
                                  [1,0,1,0,1],
                                  [0,1,0,1,0],
                                  [1,0,1,0,1],
                                  [0,1,0,1,0]], 5, 4), 2, "1st example");

    assert.equal(countNeighbours([[1, 0, 0, 1, 0],
                                  [0, 1, 0, 0, 0],
                                  [0, 0, 1, 0, 1],
                                  [1, 0, 0, 0, 0],
                                  [0, 0, 1, 0, 0]], 0, 0), 1, "2nd example");

    assert.equal(countNeighbours([[1, 1, 1],
                                  [1, 1, 1],
                                  [1, 1, 1]], 0, 2), 3, "Dense corner");

    assert.equal(countNeighbours([[0, 0, 0],
                                  [0, 1, 0],
                                  [0, 0, 0]], 1, 1), 0, "Single");

    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

