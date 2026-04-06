class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let maxVol = 0;
        
        while(left < right){
            const height = Math.min(heights[left], heights[right]);
            const width = right - left;
            const vol = height*width;
            if(vol > maxVol) maxVol = vol;
            if(heights[left] < heights[right]) left+=1;
            else right-=1;
        }
        return maxVol;
    }
}
