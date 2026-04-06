class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const mHeight = matrix.length;
        let i=0;
        while(i<mHeight){
            if(matrix[i][matrix[i].length - 1] >= target){
                if(matrix[i].includes(target)) return true;
            }
            i+=1;
        }
        return false
    }
}
