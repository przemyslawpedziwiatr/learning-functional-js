function repeat(operation, num) {
    // while(num > 0) {
    //     operation();
    //     num -=1;
    // }
    if(num === 0) {
        return;
    }
    operation();
    return repeat(operation, num -= 1);
}

module.exports = repeat