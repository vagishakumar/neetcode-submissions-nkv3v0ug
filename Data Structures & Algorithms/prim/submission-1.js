/**
 * const PriorityQueue = require('priority-queue-js');
 */

class Solution {
    /**
     * @param {number} n
     * @param {Array<Array<number>>} edges
     * @returns {number}
     */
    // minimumSpanningTree(n, edges) {
    //     let adj = {};

    //     for(let i=0; i<n; i++) {
    //         adj[i] = []
    //     }

    //     for(let [src, dst, wt] of edges) {
    //         adj[src].push([dst, wt]);
    //         adj[dst].push([src, wt]);
    //     }

    //     let minHeap = new PriorityQueue((a, b) => a[0] - b[0]);
    //     let shortest = [];
    //     let visit = new Set();
    //     visit.add(0)
    //     let res = 0;

    //     for(let [n1, w1] of adj[0]) {
    //         minHeap.enqueue([w1, 0, n1]);
    //     }

    //     while(!minHeap.isEmpty()) {
    //         let [w1, src, dst] = minHeap.dequeue();
    //         if(visit.has(dst)) continue

    //         shortest.push([src, dst]);
    //         visit.add(dst);
    //         res+=w1

    //         for(let [n1, wt] of adj[dst]) {
    //             if(!visit.has(n1)) {
    //                 minHeap.enqueue([wt, dst, n1]);
    //             }
    //         }
    //     }

    //     return res;
    // }

    minimumSpanningTree(n, edges) {
        let adj = {};

        for(let i=0; i<n; i++) {
            adj[i] = []
        }
        for(let [src, dst, wt] of edges) {
            adj[src].push([dst, wt]);
            adj[dst].push([src, wt]);
        }
        let minHeap = new PriorityQueue((a, b) => a[0] - b[0]);
        let mst = [];
        let visit = new Set();
        visit.add(0);
        let total = 0;

        for(let [n1, w1] of adj[0]) {
            minHeap.enqueue([w1, 0, n1])
        }

        while(!minHeap.isEmpty()) {
            let [w1, n1, n2] = minHeap.dequeue();
            if(visit.has(n2)) continue;

            mst.push([n1, n2]);
            visit.add(n2);
            total += w1;

            for(let [dst, w2] of adj[n2]) {
                if(visit.has(dst)) continue;

                minHeap.enqueue([w2, n2, dst]);
            }
        }

        return visit.size === n ? total : -1
    }
}
