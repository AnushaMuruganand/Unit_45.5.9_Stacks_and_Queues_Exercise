/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    // Create a new node
    const newNode = new Node(val);

    // If this is the first node inserted, then make both .first and .last to be this new node
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    }

    // Make the last node's ".next" to be the newNode
    this.last.next = newNode;

    // Make the .last as the newNode
    this.last = newNode;

    this.size += 1;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    // If QUEUE is empty then throw an error
    if (!this.first) {
      throw new Error("Can't dequeue from an empty queue.");
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

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (this.size === 0) return true;

    return false;
  }
}

module.exports = Queue;
