class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i=0;

        while(i < numbers.length - 1){
            const reqNum = target - numbers[i];
            const secondIdx = numbers.findIndex(num => reqNum === num)
            if(secondIdx !== -1) return [i+1, secondIdx+1];
            i+=1;
        }
        return [];
        
    }
}
