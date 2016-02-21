var assert = require('assert');

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    var count = 0;

    for (var i = 0; i < nums.length; i += 2, count++) {
        if (nums[i] === nums[i + 1]) {
            for (var j = i + 2; j < nums.length; j++, count++) {
                if (nums[i] != nums[j]) {
                    swap(nums, i + 1, j);
                    count++;
                    break;
                }
            }
        }
        if (nums[i] > nums[i + 1]) {
            swap(nums, i + 1, i);
            count++;
        }
    }
    console.log(nums);

    // 1 2 1 2 1 3 3 3 3
    if (nums.length % 2 == 1 && nums[nums.length-1] == nums[nums.length-2]){
        i = 0;
        while(i < nums.length-1 && (nums[i] == nums[nums.length-1] || nums[i+1] == nums[nums.length-1]) ){
            i+=2;
        }
        if (nums[i] < nums[nums.length-1]){
            swap(nums, i+1, nums.length-1);
        } else {
            swap(nums, i, nums.length-1);
        }
    }

    // 2 3 3 4 -> 3 4 2 3
    for (var i = (nums.length - nums.length % 2)- 2; i > 0; i -= 2, count++) {
        if (nums[i] >= nums[i - 1]) {
            // 4 5 5 6 5 7 -> 5 7 5 6 4 5
            //     i   j
            var j = i;
            while(j+2 < nums.length && nums[j+2] == nums[i]){
                j+=2;
                count++;
            }
            swap(nums, j, i - 2);
            swap(nums, j + 1, i - 1);
            count+=2;
        }

    }
    console.log('count:', count);
};

function swap(arr, i , j){
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function isValidWiddleSort(arr) {
    var i=0;
    while(i < arr.length-1){
        if (i%2){
            if (arr[i] <= arr[i+1]){
                return false
            }
        } else {
            if (arr[i] >= arr[i+1]){
                return false
            }
        }
        i++;
    }
    return true;
}

describe('isValidWiddleSort', function () {
    it('should return true', function(){
        assert.ok(isValidWiddleSort([1,2,1,3,2]), 'simple arr')
    })
    it('should return false', function(){
        assert.ok(!isValidWiddleSort([3,2]));
    })
    it('should return false, duplicates', function(){
        assert.ok(!isValidWiddleSort([1,2,2]));
    })
})

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
})