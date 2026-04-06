class MinStack {
    constructor() {
        this.min = Infinity;
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.stack.length === 0) this.min = val;
        this.stack.push(val)
        if(this.min>val) this.min = val;
        return null;
    }

    /**
     * @return {void}
     */
    pop() {
        const pop = this.stack.pop();
        if(this.min === pop){
            let minVal = this.stack[0]
        for(let i=0; i<this.stack.length; i+=1){
            if(minVal > this.stack[i]){
                minVal = this.stack[i];
            }
        } 
        this.min=minVal;
        }
    }

    /**
     * @return {number}
     */
    top() {
       return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
       return this.min;
    }
}
