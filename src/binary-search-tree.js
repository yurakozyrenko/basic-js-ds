const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
    constructor() {
        this.rot = null;
    }

    // Метод для получения корневого узла

    root() {
        return this.rot;
    }

    add(data) {
        const newNode = new Node(data);
        if (this.rot === null) {
            this.rot = newNode;
        } else {
            this.insertNode(this.rot, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    has(data) {
        return this.searchNode(this.rot, data) !== null;
    }

    find(data) {
        return this.searchNode(this.rot, data);
    }

    searchNode(node, data) {
        if (node === null) {
            return null;
        }

        if (data < node.data) {
            return this.searchNode(node.left, data);
        } else if (data > node.data) {
            return this.searchNode(node.right, data);
        } else {
            return node;
        }
    }

    // Удаление узла из дерева
    remove(data) {
        this.rot = this.removeNode(this.rot, data);
    }

    removeNode(node, data) {
        if (node === null) {
            return null;
        }

        if (data < node.data) {
            node.left = this.removeNode(node.left, data);
        } else if (data > node.data) {
            node.right = this.removeNode(node.right, data);
        } else {
            // Узел с одним или без детей
            if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            }

            // Узел с двумя детьми: заменяем узел на минимальный узел из правого поддерева
            node.data = this.findMinNode(node.right).data;
            node.right = this.removeNode(node.right, node.data);
        }

        return node;
    }

    // Поиск минимального узла в дереве
    findMinNode(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    // Возвращает минимальное значение в дереве
    min() {
        if (this.rot === null) {
            return null;
        }
        return this.findMinNode(this.rot).data;
    }

    // Поиск максимального узла в дереве
    findMaxNode(node) {
        while (node.right !== null) {
            node = node.right;
        }
        return node;
    }

    // Возвращает максимальное значение в дереве
    max() {
        if (this.rot === null) {
            return null;
        }
        return this.findMaxNode(this.rot).data;
    }
}
module.exports = {
  BinarySearchTree
};
