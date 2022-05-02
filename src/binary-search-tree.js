const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.beginTree = null;
  }

  root() {
    return this.beginTree;
  }

  add(data) {
    this.beginTree = addData(this.beginTree, data);

    function addData(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data == data) {
        return node;
      }

      if (data < node.data) {
        node.left = addData(node.left, data);
      } else {
        node.right = addData(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    if (this.find(data)) {
      return true;
    } else {
      return false;
    }
  }

  find(data) {
    return findData(this.beginTree, data);

    function findData(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        return findData(node.left, data);
      } else {
        return findData(node.right, data);
      }
    }
  }

  remove(data) {
    this.beginTree = removeData(this.beginTree, data);

    function removeData(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeData(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeData(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let maxLeft = node.left;
        while (maxLeft.right) {
          maxLeft = maxLeft.right;
        }
        node.data = maxLeft.data;
        node.left = removeData(node.left, maxLeft.data);
        return node;
      }
    }
  }

  min() {
    if (!this.beginTree) {
      return null;
    }
    return minData(this.beginTree);

    function minData(node) {
      if (node.left) {
        return minData(node.left);
      } else {
        return node.data;
      }
    }
  }

  max() {
    if (!this.beginTree) {
      return null;
    }
    return maxData(this.beginTree);

    function maxData(node) {
      if (node.right) {
        return maxData(node.right);
      } else {
        return node.data;
      }
    }
  }
}

module.exports = {
  BinarySearchTree,
};
