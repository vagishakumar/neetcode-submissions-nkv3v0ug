class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const arrLen = temperatures.length;
        const result = new Array(arrLen).fill(0);
        for(let i=arrLen-2; i>=0; i-=1){
            let j=i+1;
            while(j<arrLen && temperatures[j] <=temperatures[i]){
                if(result[j] === 0){
                    j = arrLen;
                    break;
                }
                j+= result[j];
            }
            if(j<arrLen){
                result[i] = j-i;

            }}
        return result;
        }
}