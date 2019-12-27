"use strict";

function friendlyNumber(number, options){
    if (!options) {
        options = {};
    }
    if (!options.base) {
        options.base = 1000;
    }
    if (!options.decimals) {
        options.decimals = 0;
    }
    if (!options.suffix) {
        options.suffix = '';
    }
    if (!options.powers) {
        options.powers = ['', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
    }
    
    var isNegative = number < 0 ? true : false;
    number = isNegative ? -1*number : number;
    
    if(number < options.base) return String(appendZeroDecimals(number, options.decimals)) + options.powers[0] + options.suffix;
    
    var result = '';
    for(var i=options.powers.length-1; i>=0; i--){
        var newBase = Math.pow(options.base, i);
        if(number < newBase){
            continue;
        } else{
            result = getRoundNumer(number/newBase, options.decimals) + options.powers[i] + options.suffix;
            result = isNegative ? '-' + result : result;
            return String(result);
        }
    }
}

function getRoundNumer(number, decimal){
    number = String(number);
        
    if(decimal === 0) return Math.floor(number);
    
    var decimalPart = number-Math.floor(number);
    if(decimalPart === 0){
        return appendZeroDecimals(number, decimal);
    }    
    decimalPart = String(decimalPart);
    var noWanted = decimalPart.slice(decimal+2, decimal+3)
    var wantedPart = String(decimalPart).slice(2, decimal+2) ;
    var rounded = noWanted < 5 ? decimalPart[decimal+1] : Number(decimalPart[decimal+1]) + 1;
    
    return Math.floor(number) + '.' + rounded;
}

function appendZeroDecimals(number, decimal){
    if(decimal == 0) return Math.floor(number);
    var decimalPart = '';
    for(var i=0; i<decimal; i++){
    decimalPart += 0;
    }
    return Math.floor(number) + '.' + decimalPart;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(friendlyNumber(0,{"decimals":3,"suffix":"th"}), '0.000th', "0.000th")
    assert.equal(friendlyNumber(-150,{"base":100,"powers":["","d","D"]}), '-1d', "-1d")
    assert.equal(friendlyNumber(102,{"decimals":2}), '102.00', "102.00")
    assert.equal(friendlyNumber(12000000,{"decimals":3}), '12.000M', "12.000M")
    assert.equal(friendlyNumber(102), '102', "102");
    assert.equal(friendlyNumber(10240), '10k', "10k");
    assert.equal(friendlyNumber(12341234, {decimals: 1}), '12.3M', "12.3M");
    assert.equal(friendlyNumber(12461, {decimals: 1}), '12.5k', "12.5k");
    assert.equal(friendlyNumber(1024000000, {base: 1024, suffix: 'iB'}), '976MiB', "976MiB");
    console.log("Tests and earn cool rewards!");
}

