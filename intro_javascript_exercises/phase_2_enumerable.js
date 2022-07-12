Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
};

Array.prototype.myMap = function(callback) {
    const arr = [];

    this.myEach(function(el) { arr.push(callback(el)); });

    return arr;
};

Array.prototype.myReduce = function(callback, initialValue) {
    const arr = [...this];
    if (initialValue === undefined) { initialValue = arr.shift(); }

    arr.myEach(function(el) { initialValue = callback(initialValue, el); });

    return initialValue;
};