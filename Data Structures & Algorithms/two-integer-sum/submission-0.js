class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numObj = {}
        for(let i=0; i<nums.length; i++){
            const diff = target - nums[i]
            console.log('diff', diff)
            console.log('numObj[diff]', numObj[diff])
            if(numObj[diff] || numObj[diff] === 0) return [i, numObj[diff]]
            console.log('nums[i]', nums[i])
            console.log('numObj', numObj)
            console.log('numObj[nums[i]]', numObj[nums[i]])
            if(!numObj[nums[i]])
                numObj[nums[i]] = i;
        }
        return []
    }
}
