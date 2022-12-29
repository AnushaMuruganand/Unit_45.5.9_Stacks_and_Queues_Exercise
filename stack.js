/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val);

    let currentNode = this.first;

    // If this is the first node created
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    }
    else {
      // Make the .first to be the newNode
      this.first = newNode;

      // Then make the newNode .next to be the previous first node
      this.first.next = currentNode;
    }

    this.size += 1;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    // If  STACK is empty then throw an error
    if (!this.first) {
      throw new Error("Can't pop from an empty stack.");
    }

    let currentNode = this.first;

    // If there is only node to be removed make this.first and this.last as null
    if (this.first == this.last) {
      this.first = null;
      this.last = null;
    }

     // Making the .first to be the next node from the current node
    this.first = currentNode.next;

    this.size -= 1;

    return currentNode.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {

    if (this.size === 0) return true;

    return false;

  }
}

module.exports = Stack;
