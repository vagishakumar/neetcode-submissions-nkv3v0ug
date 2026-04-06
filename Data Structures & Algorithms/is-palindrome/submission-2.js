class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphanumeric(char) {
        const code = char.charCodeAt(0);
        return (code >= 48 && code <= 57) ||  // 0-9
               (code >= 65 && code <= 90) ||  // A-Z
               (code >= 97 && code <= 122);   // a-z
    }

    isPalindrome(s) {
        const myString = s.toLowerCase();
        let left = 0;
        let right = myString.length - 1;

        while(left < right){
            while(left < right && !this.isAlphanumeric(myString[right])){
                right -= 1;
            }
            while(left < right &&  !this.isAlphanumeric(myString[left])){
                left += 1;
            }
            if(myString[right] !== myString[left]) return false
            right -= 1;
            left += 1;
        }
        return true;
    }
}
