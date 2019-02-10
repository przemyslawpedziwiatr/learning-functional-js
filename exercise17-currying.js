function curryN(fn, n, args = []) {
    var curryAmount = n;
    if(n === undefined || typeof n === 'undefined') {
        curryAmount = fn.length;
    }
    
    return function(x) {
        curryAmount -= 1;
        if(curryAmount >= 0) {
            args.push(x);
            return curryN(fn, curryAmount, args);
        }
        return fn.call(null, args);        
    };
}

module.exports = curryN