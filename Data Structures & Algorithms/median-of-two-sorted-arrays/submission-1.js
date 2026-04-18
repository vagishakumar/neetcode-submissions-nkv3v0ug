class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let a = nums1;
        let b = nums2;

        if(b.length < a.length){
            [a,b] = [b,a];
        }

        const totalLen = a.length + b.length;
        const half = Math.floor((totalLen + 1) / 2);

        let l = 0;
        let r = a.length;

        while(l<=r){
            const i = Math.floor((l+r) / 2);
            const j = half - i;

            const aLeft = i > 0 ? a[i - 1] : Number.MIN_SAFE_INTEGER;
            const aRight = i < a.length ? a[i] : Number.MAX_SAFE_INTEGER;
            const bLeft = j > 0 ? b[j - 1] : Number.MIN_SAFE_INTEGER;
            const bRight = j < b.length ? b[j] : Number.MAX_SAFE_INTEGER;

            if(aLeft <= bRight && bLeft <= aRight){
                if(totalLen%2 !== 0) return Math.max(aLeft,bLeft);
                return (Math.max(aLeft,bLeft) + Math.min(aRight,bRight)) / 2;
            } else if(aLeft > bRight){
                r = i-1;
            } else {
                l = i+1;
            }
        }

        return -1;
    }
}
