"use strict";

const m = 1000;
const d = 500;
const c = 100;
const l = 50;
const x = 10;
const v = 5;
const i = 1;

const M = 'M';
const D = 'D';
const C = 'C';
const L = 'L';
const X = 'X';
const V = 'V';
const I = 'I';

const strArray = [I, V, X, L, C, D, M];
    
function romanNumerals(number) {
    
    
    var romanNumber = '';
    
    var res = getMilles(number);
    romanNumber += res[1];
    number = res[0];
    //
    res = getQuingenti(number);
    romanNumber += res[1];
    number = res[0];
    //
    res = getCentum(number);
    romanNumber += res[1];
    number = res[0];
    //
    res = getQuinquaginta(number);
    romanNumber += res[1];
    number = res[0];
    //
    
    console.log(romanNumber, number)
    
    var res = getDecem(number);
    romanNumber += res[1];
    number = res[0];
    
    console.log('DECEM', romanNumber, number)

    res = getQuinque(number);
    romanNumber += res[1];
    number = res[0];
    
    console.log(romanNumber, number)

    res = getUnus(number);
    romanNumber += res[1];
    number = res[0];
    
     console.log(romanNumber)
    return romanNumber;
}

function getMilles(number){
    var div = Math.floor(number/m);
    var roman = '';
    
    if(number < m && number >= m-c){
        roman = C + M;    
        number -= (m-c);
    }else{
        roman = appendNumeral(M, div);
        number = number - div*m;
    }
    if(number < m && number >= m-c){
        roman += C + M;    
        number -= (m-c);
    }
    
    return [number, roman];

}

function getQuingenti(number){
    return getQuinNumber(number, d, c, d, D, C, D);  

    var roman = '';
    
    if(number < d && number >= d-c){
        roman = C + D;    
        number -= (d-c);
    }else if(number >= d){
       roman = D;
       number -= d;
    }
    
    return [number, roman];
}

function getCentum(number){
    return getDecNumber(number, c, d, C, D);
}

function getQuinquaginta(number){
    return getQuinNumber(number, l, x, c, L, X, C);  
}

function getDecem(number){
    return getDecNumber(number, x, l, X, L);
}

function getQuinque(number){    
    return getQuinNumber(number, v, i, x, V, I, X);    
}

function getQuinNumber(number, actualValue, lastValue, nextValue, actualNumeral, lasNumeral, nextNumeral){
    var roman = '';
    
    if(number < actualValue){
        return [number, roman];
    }
    if(number >= nextValue-lastValue){
        roman = lasNumeral + nextNumeral;  
        number = 0;
    } else {
        roman = actualNumeral;
        number -= actualValue;
    }
    
    return [number, roman];
}

function getUnus(number){
    return getDecNumber(number, i, v, I, V);
}

function getDecNumber(number, actualValue, nextValue, actualNumeral, nextNumeral){
    var div = Math.floor(number/actualValue);
    var roman = '';
    console.log(actualValue, nextValue, nextValue-actualValue)
    if(number >= nextValue-actualValue){
        roman = actualNumeral + nextNumeral;    
        number -= (nextValue-actualValue);
    }else{
        roman = appendNumeral(actualNumeral, div);
        number = number - div*actualValue;
    }
    return [number, roman];
}

function appendNumeral(numeral, number){
    var roman = '';
    for(var i=0; i<number; i++){
        roman += numeral;        
    }
    return roman;
}






var assert = require('assert');

if (!global.is_checking) {
    assert.equal(romanNumerals(4), 'IV', "First");
    assert.equal(romanNumerals(76), 'LXXVI', "Second");
    assert.equal(romanNumerals(499), 'CDXCIX', "Third");
    assert.equal(romanNumerals(3888), 'MMMDCCCLXXXVIII', "Forth");
    console.log("Done! Go Check!");
}

