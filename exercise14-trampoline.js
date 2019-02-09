function repeat(operation, num) {
    // Modify this so it doesn't cause a stack overflow!
    return function() {
        if (num <= 0) return
        operation();
        return repeat(operation, --num);
    }
  }

  function trampoline(fn) {
    while(fn && typeof fn === 'function') {
        fn = fn();
    }
  }

  module.exports = function(operation, num) {
    trampoline(() => {
        return repeat(operation, num);
    });
  }
