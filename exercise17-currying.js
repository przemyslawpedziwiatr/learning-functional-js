function curryN(fn, n) {
    n = n || fn.length;
    
    return function(x) {
        if(n > 1) {
            return curryN(fn, n -1);
        }
        return fn(x);        
    };
}

module.exports = curryN