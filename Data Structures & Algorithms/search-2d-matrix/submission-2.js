class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rows = matrix.length;
        const cols = matrix[0].length;

        let top=0, bottom=rows-1;
        while(top<=bottom){
            const row = Math.floor((top+bottom) / 2);
            if(target > matrix[row][cols - 1]){
                top = row+1;
            }else if(target < matrix[row][0]){
                bottom = row-1;
            }else {
                let left = 0, right = cols-1;
                while(left<=right){
                    const mid = Math.floor((left+right)/2);
                    if(target>matrix[row][mid]){
                        left = mid+1;
                    }else if(target<matrix[row][mid]){
                        right = mid-1;
                    }else{
                        return true;
                    }
                }
                return false;
            }
        }
        return false
    }
}
