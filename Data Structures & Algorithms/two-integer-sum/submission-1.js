class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numObj = new Map();

        for(let i=0; i<nums.length; i++){
            const diff = target - nums[i]
            if(numObj.has(diff)) return [numObj.get(diff), i]
            numObj.set(nums[i],i);
        }
        return []
    }
}
