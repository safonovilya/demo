/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
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
    if (nums.length % 2 == 1 && nums[nums.length - 1] == nums[nums.length - 2]) {
        i = 0;
        while (i < nums.length - 1 && (nums[i] == nums[nums.length - 1] || nums[i + 1] == nums[nums.length - 1])) {
            i += 2;
        }
        if (nums[i] < nums[nums.length - 1]) {
            swap(nums, i + 1, nums.length - 1);
        } else {
            swap(nums, i, nums.length - 1);
        }
    }

    // 2 3 3 4 -> 3 4 2 3
    for (var i = (nums.length - nums.length % 2) - 2; i > 0; i -= 2, count++) {
        if (nums[i] >= nums[i - 1]) {
            // 4 5 5 6 5 7 -> 5 7 5 6 4 5
            //     i   j
            var j = i;
            while (j + 2 < nums.length && nums[j + 2] == nums[i]) {
                j += 2;
                count++;
            }
            swap(nums, j, i - 2);
            swap(nums, j + 1, i - 1);
            count += 2;
        }

    }
    console.log('count:', count);
};

function swap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

module.exports = wiggleSort;