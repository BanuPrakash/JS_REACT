// HOF because it takes predicateFn as argument
// OCP
function filter(elems, predicateFn) {
    var result = [];
    for(var i = 0;  i< elems.length; i++) {
        if(predicateFn(elems[i])) {
            result.push(elems[i]);
        }
    }
    return result;
}

// HOF
function map(elems, transformFn) {
    var result = [];
    for(var i = 0;  i< elems.length; i++) {
            result.push(transformFn(elems[i]));
    }
    return result;
}
