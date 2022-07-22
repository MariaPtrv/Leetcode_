//20. Valid Parentheses
//https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    let isCorrect = true;
    
    if (s.length % 2 !== 0) return false;
    
    function checkIfLastIsSame (symbol) {
        const element = stack.pop();
        return element === symbol ? true : false;    
    };
    
    for (let i = 0; i < s.length && isCorrect; i++) {
        switch (s[i]) {
            case '(':
                stack.push(')')
                break;
            case '{':
                stack.push('}')
                break;
            case '[':
                stack.push(']')
                break;
            case ')':    
                if (!checkIfLastIsSame(')')) 
                    isCorrect = false;
                break;
            case '}':
                if (!checkIfLastIsSame('}'))
                    isCorrect = false;
                break;
            case ']':
                if (!checkIfLastIsSame(']')) 
                    isCorrect = false;
                break;           
        }
    }
    if (stack.length!==0) isCorrect = false;
    return isCorrect;
};
