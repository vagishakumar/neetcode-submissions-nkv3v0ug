class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */

    isCountEqual(s1, s2) {
        const m1 = new Map();
        const m2 = new Map();
        for(let i=0; i<s1.length; i++){
            m1.set(s1[i], (m1.get(s1[i]) || 0) + 1);
            m2.set(s2[i], (m2.get(s2[i]) || 0) + 1);
        }

        const chars = Array.from(m1.keys());

        for(let char of chars){
            console.log('char', char)
            console.log('m1.get(char)', m1.get(char))
            console.log('m2.get(char)', m2.get(char))
            if(m1.get(char) > (m2.get(char) || 0)) return false;
        }

        return true;
    }

    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;

        let l=0;
        let r=l+s1.length;
        let isPresent = false

        while(isPresent === false && r <= s2.length){
            const curr = s2.slice(l,r);
            console.log('curr ::', curr)
            console.log('this.isCountEqual(s1,curr)', this.isCountEqual(s1,curr))
            if(this.isCountEqual(s1,curr)) {
                isPresent = true;
                return true;
            }
            l++;
            r++;
        }
        
        return false;
        
    }

}
