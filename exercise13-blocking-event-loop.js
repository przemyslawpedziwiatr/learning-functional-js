function repeat(operation, num) {
    if (num <= 0) return;
    setTimeout(() => operation(), num);
    return repeat(operation, --num);
}

module.exports = repeat