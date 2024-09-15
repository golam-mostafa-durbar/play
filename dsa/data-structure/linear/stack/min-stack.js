class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(x) {
    this.stack.push(x);
    // Push to minStack if it's empty or the current element is smaller than or equal to the top of minStack
    if (
      this.minStack.length === 0 ||
      x <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(x);
    }
  }

  pop() {
    const poppedValue = this.stack.pop();
    // If the popped value is the same as the top of minStack, pop from minStack too
    if (poppedValue === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

// Example usage:
const minStack = new MinStack();

minStack.push(-2);
minStack.push(20);
minStack.push(-3);

console.log(minStack.getMin()); // -3

minStack.pop();

console.log(minStack.top()); // 0
console.log(minStack.getMin()); // -2
