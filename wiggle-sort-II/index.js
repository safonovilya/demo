/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    var count = 0;

    //should make pairs
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

    //should remove duplicates
    // 1 2 1 2 1 3 3 3 3
    // 1 2 1 2 3 3 3
    var length = nums.length -2 >> 1 << 1;
    for (var i = length; i >= 0; i -= 2) {
        if (nums[i] == nums[i+1]){
            var j = i-2;
            while(j>0 && (nums[j] == nums[i] || nums[j+1] == nums[i]) ){
                j-=2;
            }
            //1 2 3 3
            if (nums[j] < nums[i] && nums[j+1] < nums[i]){
                swap(nums, j+1, i);
            }
            // 1 4 3 3
            else if (nums[j] < nums[i] && nums[j+1] > nums[i]) {
                swap(nums, j+1, i+1);
            }
            // 4 5 3 3
            else {
                swap(nums, j, i);
            }
        }
    }
    console.log(nums);

    //should sort
    // 1 2 1 3 3 -> 1 3 1 2 3
    for (var i = ((nums.length + 1) >> 1 << 1) ; i > 1; i -= 2, count++) {
        if (nums[i] >= nums[i + 1]) {
            var j = i-2;
            while(j > 0 && nums[j] == nums[i]){
                j-=2;
                count++;
            }
            swap(nums, j, i);
            swap(nums, j - 1, i - 1);
            count+=2;
        }
    }

    // 2 3 3 4 -> 3 4 2 3
    for (var i = 1 ; i < nums.length; i += 2, count++) {
        if (nums[i] <= nums[i + 1]) {
            var j = i+2;
            while(j < nums.length && nums[j] == nums[i]){
                j-=2;
                count++;
            }
            swap(nums, j, i);
            swap(nums, j - 1, i - 1);
            count+=2;
        }
    }

    // 4 5 5 6 5 7 -> 5 7 5 6 4 5

    console.log('count:', count, 'length: ', nums.length);
};

function swap(arr, i , j){
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    console.log(arr);
}

exports.wiggleSort = wiggleSort;