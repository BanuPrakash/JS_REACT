function forEach(elems, action) {
    for(var i = 0;  i< elems.length; i++) {
        action(elems[i]);
    }
}

function filter(elems, predicateFn) {
    var result = [];
    for(var i = 0;  i< elems.length; i++) {
        if(predicateFn(elems[i])) {
            result.push(elems[i]);
        }
    }
    return result;
}

function map(elems, transformFn) {
    var result = [];
    for(var i = 0;  i< elems.length; i++) {
            result.push(transformFn(elems[i]));
    }
    return result;
}

// private to lib.js
function doTask() {

}

function add(x,y) {
    return x + y;
}
module.exports = {
    filter, map, add, forEach
}