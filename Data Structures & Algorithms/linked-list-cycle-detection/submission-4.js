/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
       let traversed = new Map();
        let curr = head;
        
       while (curr !== null) {
        if (traversed.has(curr)) {
            return true;
        }
        traversed.set(curr, true);
        curr = curr.next;
        }   

        return false
    }
}
