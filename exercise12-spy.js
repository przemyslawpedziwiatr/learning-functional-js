function Spy(target, method) {
    let tracker = {count : 0} ;
    const copiedMethod = target[method].bind(target);
    target[method] = function() {
        tracker.count += 1;
        return copiedMethod(... arguments);
    }
    return tracker;
}

module.exports = Spy