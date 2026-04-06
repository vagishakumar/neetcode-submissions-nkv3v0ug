class MinStack {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        return null;
    }

    /**
     * @return {void}
     */
    pop() {
        const newStack = []
        for(let i=0; i<this.stack.length-1; i+=1){
            newStack.push(this.stack[i])
        }
        this.stack=newStack;
        return null;
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
       let minVal = this.stack[0]
        for(let i=0; i<this.stack.length; i+=1){
            if(minVal > this.stack[i]){
                minVal = this.stack[i];
            }
        } 
        return minVal;
    }
}
