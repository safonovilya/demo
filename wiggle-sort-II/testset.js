/**
 * Created by ndyumin on 21.02.2016.
 */

var assert = require('assert');
var isValidWiddleSort = require('./tester');

function run(wiggleSort) {
    describe('wiggleSort', function () {
        it('should return array with pairs', function () {
            var nums = [1, 2, 3, 4];
            wiggleSort(nums);
            assert.ok(isValidWiddleSort(nums));
        });
        it('should return array with MinMax pairs', function () {
            var nums = [2, 1, 3, 4];
            wiggleSort(nums);
            assert.ok(isValidWiddleSort(nums));
        });
        it('array with repeated elements should return MinMax pairs', function () {
            var nums = [2, 2, 3, 4];
            wiggleSort(nums);
            assert.ok(isValidWiddleSort(nums));
        });
        it('should return push MinMax pairs with eq neibers to top of list', function () {
            var nums = [2, 3, 3, 4];
            wiggleSort(nums);
            assert.ok(isValidWiddleSort(nums));
        });
        it('should return push MinMax pairs with eq neibers to top of list', function () {
            var nums = [1, 3, 2, 2, 2, 1, 1, 3, 1, 1, 2, 3];
            wiggleSort(nums);
            assert.ok(isValidWiddleSort(nums));
        });
        it('not even nums', function () {
            var nums = [1, 3, 2, 2, 2, 1, 1, 3, 1, 1, 2];
            wiggleSort(nums);
            assert.ok(isValidWiddleSort(nums));
        });
        it('after pairs creat last reapeted', function () {
            var nums = [2, 1, 1, 2, 1, 3, 3, 3, 1, 3, 1, 3, 2];
            //[1, 2, 1, 2, 1, 3, 1, 3, 1, 3, 2, 3, 3]
            wiggleSort(nums);
            assert.ok(isValidWiddleSort(nums));
        });
        it('after pairs creat last reapeted', function () {
            var nums = [3, 2, 3, 3, 2, 1, 1, 2, 3, 1, 1, 3, 2, 1, 2, 2, 2, 2, 1];
            wiggleSort(nums);
            assert.ok(isValidWiddleSort(nums));
        });
        it('should return push MinMax pairs with eq neibers smart swap', function () {
            var nums = [4, 5, 5, 5, 5, 6, 6, 6];
            wiggleSort(nums);
            assert.ok(isValidWiddleSort(nums));
        });
    });
}

module.exports = run;