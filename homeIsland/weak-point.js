"use strict";

function weakPoint(matrix){
    var w = matrix[0].length;
    var h = matrix.length;
    
    var rowSumArray = getRowSumArray(matrix, w, h);
    var colSumAarray = getColSumArray(matrix, w, h);
    console.log(rowSumArray, colSumAarray)
    
    var rowIndex = getIndexFromSmallestNumber(rowSumArray, w);
    var colIndex = getIndexFromSmallestNumber(colSumAarray, h);
    console.log("rowIndex", rowIndex, colIndex);
    
    
    return [rowIndex, colIndex];
}

function getRowSumArray(matrix, w, h){
    var sumArray = [];
    for(var i=0; i<h; i++){
        sumArray.push(getRowSum(matrix[i], w));
    }
    
    return sumArray;
}

function getRowSum(row, w){
    var sum = 0;
    for(var i=0; i<w; i++){
        sum += row[i];
    }
    return sum;
}

function getColSumArray(matrix, w, h){
    var sumArray = [];
    var sum = 0;
    for(var i=0; i<h; i++, sum=0){
        for(var j=0; j<w; j++){
            sum += matrix[j][i];
        }
        sumArray.push(sum);
    }
    return sumArray;
}

function getIndexFromSmallestNumber(array, len){
    console.log("--------------")
    var number = array[0]; var index=0;
    for(var i=0; i<len; i++){
        if(array[i] < number){
            number = array[i];
            index = i;
        }
    }
    console.log(index)
    return index;
}


var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(weakPoint([[7, 2, 7, 2, 8],
                                [2, 9, 4, 1, 7],
                                [3, 8, 6, 2, 4],
                                [2, 5, 2, 9, 1],
                                [6, 6, 5, 4, 5]]
                                ), [3, 3], "Example");
    assert.deepEqual(weakPoint([[7, 2, 4, 2, 8],
                                [2, 8, 1, 1, 7],
                                [3, 8, 6, 2, 4],
                                [2, 5, 2, 9, 1],
                                [6, 6, 5, 4, 5]]
                                ), [1, 2], "Two weak point");

    assert.deepEqual(weakPoint([[1, 1, 1],
                                [1, 1, 1],
                                [1, 1, 1]]
                                ), [0, 0], "Top left");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
