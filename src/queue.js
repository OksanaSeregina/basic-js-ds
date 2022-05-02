const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.tail = null;
  }

  getUnderlyingList() {
    return this.tail;
  }

  enqueue(value) {
    if (this.tail === null) {
      this.tail = new ListNode(value);
      return;
    }

    let item = this.tail;

    while (item.next !== null) {
      item = item.next;
    }
    const node = new ListNode(value);
    item.next = node;
  }

  dequeue() {
    let elem = this.tail;
    let deinstall = elem.value;
    this.tail = elem.next;
    this.length--;
    return deinstall;
  }
}

module.exports = {
  Queue,
};
