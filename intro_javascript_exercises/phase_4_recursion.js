function range(start, end) {
    if (start === end - 1) { return [start]; }
    return range(start, end - 1).concat(end - 1);
}

function sumRec(arr) {
    if (arr.length === 1) { return arr[0]; }
    return arr[0] + sumRec(arr.slice(1, arr.length));
}

function exponent1(base, exp) {
    if (exp === 0) { return 1; }
    return base * exponent1(base, exp - 1);
}

function exponent2(base, exp) {
    if (exp === 0) { return 1; }
    if (exp === 1) { return base; }

    if (exp % 2 === 0) {
        return exponent2(base, exp / 2) ** 2;
    } else {
        return base * (exponent2(base, (exp - 1) / 2) ** 2);
    }
}

function fibonacci(n) {
    if (n === 1) { return [0]; }
    if (n === 2) { return [0, 1]; }

    let lastFib = fibonacci(n - 1);
    return lastFib.concat(lastFib[lastFib.length - 1] + lastFib[lastFib.length - 2]);
}

function deepDup(arr) {
    return arr.map(function(el) { return (Array.isArray(el) ? deepDup(el) : el); });
}

function bsearch(arr, target) {
    if (!arr.includes(target)) { return -1; } 
    let midIdx = Math.floor(arr.length / 2);
    if (arr[midIdx] === target) { return midIdx; }
    if (target > arr[midIdx]) {
        return bsearch(arr.slice(midIdx + 1, arr.length), target) + midIdx + 1;
    } else {
        return bsearch(arr.slice(0, midIdx), target);
    }
}

function mergeSort(arr) {
    if (arr.length === 1) { return arr; }
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid, arr.length));
    return merge(left, right);
}

function merge(left, right) {
    let merged = [];

    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            merged.push(left.shift());
        } else {
            merged.push(right.shift());
        }
    }

    return merged.concat(left, right);
}

function subsets(arr) {
    if (arr.length === 0) { return [[]]; }
    let subs = subsets(arr.slice(0, arr.length - 1));
    return subs.concat(subs.map(function(sub) { return sub.concat(arr[arr.length - 1]); }));
}