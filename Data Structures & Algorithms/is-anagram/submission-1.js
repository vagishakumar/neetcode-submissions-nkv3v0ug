class Solution {
    
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        const sCount = {}
        const tCount = {}
        for(let char of s) {
            if(sCount[char]) sCount[char] = sCount[char] + 1
            else sCount[char] = 1
        }
        for(let char of t) {
            if(tCount[char]) tCount[char] = tCount[char] + 1
            else tCount[char] = 1
        }
        
        for(let key in sCount)
            if(sCount[key] !== tCount[key]) return false
        return true
    }
}
