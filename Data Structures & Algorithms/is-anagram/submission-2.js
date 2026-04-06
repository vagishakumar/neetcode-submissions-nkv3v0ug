class Solution {
    
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        const sCount = {}
        const tCount = {}

        for(let index in s) {
            console.log('index => ', index)
            const char = s[index]
            const character = t[index]
            if(sCount[char]) sCount[char] = sCount[char] + 1
            else sCount[char] = 1
            if(tCount[character]) tCount[character] = tCount[character] + 1
            else tCount[character] = 1
        }
        
        for(let key in sCount)
            if(sCount[key] !== tCount[key]) return false

        return true
    }
}
