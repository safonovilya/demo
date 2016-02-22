/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {

    var prev = nums[0];
    var tmp;
    var newArr = [];
    for(var i=0, len = nums.length; i < len-1; i++){
        if (nums[i] < nums[i+1]){
            newArr.push([nums[i],nums[i+1]])
        } else if (nums[i] > nums[i+1]) {
            newArr.push([nums[i+1],nums[i]])
        } else {
            for (var j = i+1; j < len; j++){
                if (nums[i]!=nums[j]){
                    tmp = nums[i+1];
                    nums[i+1] = nums[j];
                    nums[j] = tmp;
                }
            }

            if (nums[i] < nums[i+1]){
                newArr.push([nums[i],nums[i+1]])
            } else {
                newArr.push([nums[i+1],nums[i]])
            }
    }
        i++;
    }

    sortArr(newArr);
    nums = Array.prototype.concat.apply([], newArr);
    console.log(nums);
};


function sortArr(newArr){
    newArr.sort(function(a,b){
        if (a[1] == b[0]){
            return 1;
        } else if (a[1] < b[0]) {
            return 1
        }
        return -1;
    })
}

exports.wiggleSort = wiggleSort;