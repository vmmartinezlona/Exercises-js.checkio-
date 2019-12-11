"use strict";

function longRepeat(line) {
    var char = line[0];
    var index = 0;
    var len = 0;
    var str = null;
    
    for(var i=1; i<line.length; i++){
        if(char != line[i]){
            char = line[i];
            var aux = line.substring(index, i);
            if(aux.length > len){
                len = aux.length;
                str = aux;
            }
            index = i;
        }
        
    }
     len = len == 0 ? line.length : len;
    return len;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(longRepeat('aa'), 2, "First")
    assert.equal(longRepeat('ddvvrwwwrggg'), 3, "Second")
    console.log('"Run" is good. How is "Check"?');
}
