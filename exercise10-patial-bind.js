module.exports = function(namespace) {
    // return function() {
    //     const logger = console.log.bind(null, namespace, ... arguments);
    //     return logger();
    // }
    
    // better solution below
    return console.log.bind(console, namespace);
}
