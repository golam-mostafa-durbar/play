const isBalancedParentheses = (s) => {
    const len = s.length;
    if(len % 2 !== 0) {
        return false;
    }
    
    const obj = {
        '{': '}',
        '(': ')',
        '[': ']'
    }
    
    for(let i=0; i < len/2; i++) {
        if(obj[s[i]] !== s[len-1-i]) {
            return false;
        }
    }
    
    return true;
}


let s = "{[((])]}";
let balanced = isBalancedParentheses(s);
console.log(balanced); // Output: false