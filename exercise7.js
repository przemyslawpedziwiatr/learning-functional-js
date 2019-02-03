function reduce(arr, fn, initial) {
    // if(!arr.length) return initial;
    // const length = arr.length;
    // const toOperate = arr[0];
    // const nextElement = arr.slice(1);
    // let index = 0;
    // const result = fn(
    //     initial, toOperate, ++index, arr
    // );
    // return reduce(nextElement, fn, initial);

    return (
        function reduceOne(index, value) {
            if(index > arr.length - 1) return value;
            return reduceOne(index + 1, fn(
                value, arr[index], index, arr
            ));
        }
    )(0, initial); 
}

module.exports = reduce