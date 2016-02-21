/**
 * Created by ndyumin on 21.02.2016.
 */
var assert = require('assert');

function isValidWiddleSort(arr) {
    var i = 0;
    while (i < arr.length - 1) {
        if (i % 2) {
            if (arr[i] <= arr[i + 1]) {
                return false
            }
        } else {
            if (arr[i] >= arr[i + 1]) {
                return false
            }
        }
        i++;
    }
    return true;
}

describe('isValidWiddleSort', function () {
    it('should return true', function () {
        assert.ok(isValidWiddleSort([1, 2, 1, 3, 2]), 'simple arr')
    });
    it('should return false', function () {
        assert.ok(!isValidWiddleSort([3, 2]));
    });
    it('should return false, duplicates', function () {
        assert.ok(!isValidWiddleSort([1, 2, 2]));
    })
});

module.exports = isValidWiddleSort;