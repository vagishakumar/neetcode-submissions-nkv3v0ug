class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedArray = nums.sort((a, b) => a - b);
        let i = 0
        let j = i+1;
        let k = nums.length - 1;

         const result = []

        while(i < sortedArray.length - 2){
            if (i > 0 && sortedArray[i] === sortedArray[i - 1]) {
                i++;
                continue;
            }
            j = i + 1;
            k = sortedArray.length - 1;
            while(j < k){
                    const sum = sortedArray[j] + sortedArray[k];
                    if(-sortedArray[i] === sum){
                        result.push([sortedArray[i], sortedArray[j], sortedArray[k]]);
                        while (j < k && sortedArray[j] === sortedArray[j + 1]) j++;
                        while (j < k && sortedArray[k] === sortedArray[k - 1]) k--;
                        j++;
                        k--;
                    } else if(-sortedArray[i] > sum) {
                        j+=1;
                    } else {
                        k-=1;
                    }

                }

                i++;
        }
    return result;
    }
}
