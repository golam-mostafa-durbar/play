class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty!";
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty!";
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  display() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();

stack.push(5);
stack.push(15);
stack.push(25);
stack.push(35);
stack.push(45);

stack.display();
console.log("Stack size is: ", stack.size());

console.log("Top element is: ", stack.peek());
console.log("Stack size is: ", stack.size());

stack.pop();
stack.display();

console.log("Is stack empty: ", stack.isEmpty());
