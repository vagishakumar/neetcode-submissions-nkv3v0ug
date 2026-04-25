class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.cap = capacity;
        this.cache = new Map(); // key -> Node
        
        // Dummy nodes to simplify insertion/removal
        this.left = new Node(0, 0);   // least recently used
        this.right = new Node(0, 0);  // most recently used
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    // Remove node from its current position
    remove(node) {
        const prev = node.prev;
        const nxt = node.next;
        prev.next = nxt;
        nxt.prev = prev;
    }

    // Insert node right before the right dummy (most recent position)
    insert(node) {
        const prev = this.right.prev;
        prev.next = node;
        node.prev = prev;
        node.next = this.right;
        this.right.prev = node;
    }

    get(key) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            // Mark as recently used by moving to the right
            this.remove(node);
            this.insert(node);
            return node.val;
        }
        return -1;
    }

    put(key, value) {
        // If key exists, remove the old node
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key));
        }
        
        // Create and insert new node
        const newNode = new Node(key, value);
        this.cache.set(key, newNode);
        this.insert(newNode);

        // If over capacity, remove least recently used (left side)
        if (this.cache.size > this.cap) {
            const lru = this.left.next; // oldest node
            this.remove(lru);
            this.cache.delete(lru.key);
        }
    }
}