class Solution {
    
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        const sCount = {}
        const tCount = {}

        for(let index in s) {
            const char = s[index]
            const character = t[index]
            sCount[char] = (sCount[char] || 0) + 1
            tCount[character] = (tCount[character] || 0) + 1
        }
        
        for(let key in sCount)
            if(sCount[key] !== tCount[key]) return false

        return true
    }
}
