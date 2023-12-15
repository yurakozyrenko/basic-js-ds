const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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
        this.start = null; // Начало очереди
        this.end = null; // Конец очереди
    }

    getUnderlyingList() {
        return this.start;
    }

    enqueue(value) {
        const newList = new ListNode(value);
        if (this.start === null) {
            this.start = newList;
            this.end = newList;
        } else {
            this.end.next = newList;
            this.end = newList;
        }
    }

    dequeue() {
        if (this.start === null) {
            return null;
        }

        const removedValue = this.start.value;
        this.start = this.start.next;

        if (this.start === null) {
            this.end = null;
        }
        return removedValue;
    }
}
module.exports = {
  Queue
};
