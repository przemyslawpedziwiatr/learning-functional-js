function repeat(operation, num) {
    if (num <= 0) return;
    if(num % 1 === 0) {
        setTimeout(() => operation(), num);
    }
    return repeat(operation, --num);
}

module.exports = repeat