class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for(let row=0; row<9; row++){
            let seen = new Set();
            for (let j=0; j<9; j++){
                if(board[row][j] === '.') continue;
                if(seen.has(board[row][j])) return false;
                seen.add(board[row][j]);
            }
        }
        for(let col=0; col<9; col++){
            let seen = new Set();
            for (let j=0; j<9; j++){
                if(board[j][col] === '.') continue;
                if(seen.has(board[j][col])) return false;
                seen.add(board[j][col]);
            }
        }
         for(let sq=0; sq<9; sq++){
            let seen = new Set();
            for (let i=0; i<3; i++){
                for (let j=0; j<3; j++){
                    let row = Math.floor(sq/3) * 3 + i;
                    let col = (sq%3) * 3 + j;
                    if(board[row][col] === '.') continue;
                    if(seen.has(board[row][col])) return false;
                    seen.add(board[row][col]);
                }
            }
        }
        return true;
    }
}
