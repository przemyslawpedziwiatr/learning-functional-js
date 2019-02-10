module.exports = Function.prototype.call.bind(Array.prototype.slice);

/*
    What happens:
    * EVERY element that is assigned to that experssion is actually the call that has Array.prototype.slice bound
    * Calling it is actually calling Array.prototype.slice.call(first argument - used as THIS, rest used for slice) 
*/