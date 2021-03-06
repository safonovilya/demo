/**
 * Created by ndyumin on 22.02.2016.
 */
"use strict";

function solve(a) {
    const sorted = a.sort((x, y)=> x - y);
    const mid = Math.ceil(sorted.length / 2);
    const len = sorted.length;

    const arr = [];
    for (let i = 0; i < len; i += 2) {
        arr[i] = sorted[mid - i / 2 - 1];
        arr[i + 1] = sorted[len - i / 2 - 1];
    }

    for(let i = 0; i < arr.length; i++) {
        a[i] = arr[i];
    }

    return arr;
}

module.exports = solve;