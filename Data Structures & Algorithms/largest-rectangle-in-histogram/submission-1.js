class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const n = heights.length;
        const result = [];
        let maxArea = 0;
        for(let i=0; i<n; i+=1){
            let startIdx = i;
            while(result.length > 0 && result[result.length - 1][1] > heights[i]){
                const popItem = result.pop();
                const curArea = (i - popItem[0]) * popItem[1];
                if(maxArea<curArea) maxArea = curArea;
                startIdx = popItem[0];
            }
            if(result.length === 0 || result[result.length - 1][1] < heights[i]){
                result.push([startIdx, heights[i]]);
            }
        }
        while(result.length > 0){
            const popItem = result.pop();
            if(popItem){
                const curArea = (n - popItem[0]) * popItem[1];
                if(maxArea<curArea) maxArea = curArea;
            }
        }

        return maxArea;
    }
}