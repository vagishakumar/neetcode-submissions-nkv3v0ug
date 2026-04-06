class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {

        const ans = new Array(2* nums.length);
        let j=nums.length;
        for(let i=0; i< nums.length; i++) {
            ans[i] = nums[i];
            ans[i+j] = nums[i];
        }

        return ans;
    }
}
