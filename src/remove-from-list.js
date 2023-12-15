const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 class ListNode {
    constructor(x) {
        this.value = x;
        this.next = null;
    }
}
*/
function removeKFromList(l, k) {
    // Создаем фиктивный узел, чтобы облегчить работу с граничными случаями
    const result = new ListNode(0);
    result.next = l;
    let current = result;

    while (current.next !== null) {
        if (current.next.value === k) {
            // Удаляем узел с значением k
            current.next = current.next.next;
        } else {
            // Переходим к следующему узлу
            current = current.next;
        }
    }

    return result.next;
}

module.exports = {
  removeKFromList
};
