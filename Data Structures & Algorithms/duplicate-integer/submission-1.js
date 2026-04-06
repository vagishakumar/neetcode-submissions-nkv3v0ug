class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const dupli = {};

    for(const item of nums){
        if(dupli[item]) {
         return true; 
        }
        else dupli[item] = true;
    }
    return false;
    }
}
