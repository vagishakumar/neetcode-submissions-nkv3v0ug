class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const traverse = new Map();
        let i=0
        while(i>=0 && i<nums.length){
            if(!traverse.has(nums[i])) traverse.set(nums[i]);
            else return nums[i];
            i+=1;
        }

        return -1
    }
}
