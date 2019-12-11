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
    
    console.log(romanNumber, number)

    res = getQuinque(number);
    romanNumber += res[1];
    number = res[0];
    
    console.log(romanNumber, number)

    res = getUnus(number);
    romanNumber += res;
    
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
       for(var i=0; i<div; i++){
            roman += M;
        }
        number = number - div*m;
    }
    if(number < m && number >= m-c){
        roman += C + M;    
        number -= (m-c);
    }
    
    return [number, roman];
}

function getQuingenti(number){
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
    var div = Math.floor(number/c);
    var roman = '';
    
    if(number >= d-c){
        roman = C + D;    
        number -= (d-c);
    }else{
       for(var i=0; i<div; i++){
            roman += C;
        }
    }
    number = number - div*c;
    return [number, roman];
}

function getQuinquaginta(number){
    var roman = '';
    
    if(number < 50) return [number, roman];
    if(number >= c-x){
        roman = X + C;    
        number -= (c-x);
    }else{
       roman = L;
       number -= l;
    }
    
    return [number, roman];
}

function getDecem(number){
    
    var div = Math.floor(number/x);
    var roman = '';
    
    if(div == (l-x)/x){
        roman = X + L;    
    }else{
        for(var i=0; i<div; i++){
            roman += X;
        }
    }
    
    number = number - div*x;
    return [number, roman];
}

function getQuinque(number){    
    var roman = '';
    
    if(number < v){
        return [number, roman];
    }
    if(number == x-i){
        roman = I + X;  
        number = 0;
    } else {
        roman = V;
        number -= v;
    }
    
    return [number, roman];
    
}

function getUnus(number){
    var roman = '';
    
    if(number == 4){
        roman = I + V;
    }else{
        for(var i=0; i<number; i++){
            roman += I;        
        }
    }
    
    return roman;
}

function getNumber(number, numeral, index){
    /*
    console.log(number, numeral, index)
    var div = Math.floor(number/numeral); 
    var res = number%numeral;
    var roman = '';
    
    console.log(div, index, strArray[index])
    if(div >= 4){
        roman += strArray[index] + strArray [index+1];
        number = number-(div*numeral);
    }else if(div == 0){
        roman = '';
        number = number;
    } else {
        for(var i=0; i<div; i++)
            roman += strArray[index];
        number = number-(div*numeral) - res;
    }
    
    console.log('----', number, div, numeral)
    return [number, roman];
    */
}





var assert = require('assert');

if (!global.is_checking) {
    assert.equal(romanNumerals(4), 'IV', "First");
    assert.equal(romanNumerals(76), 'LXXVI', "Second");
    assert.equal(romanNumerals(499), 'CDXCIX', "Third");
    assert.equal(romanNumerals(3888), 'MMMDCCCLXXXVIII', "Forth");
    console.log("Done! Go Check!");
}

