class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const myString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        let left = 0;
        let right = myString.length - 1;

        while(left < right){
            if(myString[right] !== myString[left]) return false
            right -= 1;
            left += 1;
        }
        return true;
    }
}
