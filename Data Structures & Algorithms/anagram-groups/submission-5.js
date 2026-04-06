class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    groupAnagrams(strs) {
       const result = {};
       for(let str of strs){
        const charCount = new Array(26).fill(0);
        for(let char of str){
            charCount[char.charCodeAt(0) - "a".charCodeAt(0)] += 1
        }
        const key = charCount.join(',');
        if(!result[key]){
            result[key] = [];
        }
        result[key].push(str)
       }
       return Object.values(result);
    }
}
