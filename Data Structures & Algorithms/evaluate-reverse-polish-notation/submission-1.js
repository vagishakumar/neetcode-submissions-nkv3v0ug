class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const result = [];
        for(let i=0; i < tokens.length; i+=1){
            if(!["+", "-", "*", "/"].includes(tokens[i])){
                result.push(parseInt(tokens[i]));
            }else {

                const b = result.pop()
                const a = result.pop()
                switch(tokens[i]){
                    case "+": 
                        result.push(a+b);
                        break;
                    case "-": 
                        result.push(a-b);
                        break;
                    case "*": 
                        result.push(a*b);
                        break;
                    case "/": 
                        result.push(Math.trunc(a/b));
                        break;
                    
                }
                
            }
        }

        return result.pop();
    }
}

