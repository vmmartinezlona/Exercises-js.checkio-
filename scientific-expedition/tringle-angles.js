"use strict";

function triangleAngles(a, b, c){
    if(!isGoodTriangle(a, b, c)) return [0,0,0];
    var sideArr = [a, b, c];
    sideArr.sort((a,b) => a-b);
    
    var c_b = getAngle(sideArr[0],sideArr[1],sideArr[2]);
    var a_c = getAngle(sideArr[1],sideArr[0],sideArr[2]);
    var b_a = getAngle(sideArr[2],sideArr[1],sideArr[0]);
    
    return [c_b, a_c, b_a]
}


function isGoodTriangle(a, b, c){
    if(!isGoodLine(a, b, c)) return false;
    if(!isGoodLine(b, a, c)) return false;
    if(!isGoodLine(c, a, b)) return false;
    return true;
}

function isGoodLine(line, b, c){
    if(b-c < line && line < b+c) return true;
    return false;
}

function getCos(a, b, c){
    return  ( (b*b) + (c*c) - (a*a) ) / (2*b*c);
}

function getAngle(a, b, c){
    var arccos =  Math.acos(getCos(a, b, c));
    var pi = Math.PI;
    return 180*arccos/pi - Math.floor(180*arccos/pi) > 0.5 ? Math.ceil(180*arccos/pi) : Math.floor(180*arccos/pi);
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(triangleAngles(4, 4, 4), [60, 60, 60], "All sides are equal");
    assert.deepEqual(triangleAngles(3, 4, 5), [37, 53, 90], "Egyptian triangle");
    assert.deepEqual(triangleAngles(5, 4, 3), [37, 53, 90], "Egyptian triangle");
    assert.deepEqual(triangleAngles(2, 2, 5), [0, 0, 0], "It's can not be a triangle");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

