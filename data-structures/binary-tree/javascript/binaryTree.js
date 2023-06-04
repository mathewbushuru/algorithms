class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      // if tree required to be a binary search tree, then smaller values to left subtree
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      // newNode is larger, insert in right subtree
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(node, value) {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
    } else {
      // delete current node
      if (node.left === null && node.right === null) {
        // has no children
        node = null;
      } else if (node.left === null) {
        //has one right child
        node = node.right;
      } else if (node.right === null) {
        // has one left child
        node = node.left;
      } else {
        // has two children
        const minRight = this.findMinNode(node.right);
        // minRight is larger than all left subtree values
        // and ofc smaller than all right subtree values
        node.value = minRight.value;
        node.right = this.deleteNode(node.right, minRight.value);
      }
    }
    return node;
  }

  findMinNode(node) {
    if (node.left === null) {
      // nothing in left subtree, so parent is automatically the min
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  inOrderTraversal(callbackFn) {
    this.inOrderTraversalNode(this.root, callbackFn);
  }

  inOrderTraversalNode(node, callbackFn) {
    if (node !== null) {
      this.inOrderTraversalNode(node.left, callbackFn);
      callbackFn(node.value);
      this.inOrderTraversalNode(node.right, callbackFn);
    }
  }

  preOrderTraversal(callbackFn) {
    this.preOrderTraversalNode(this.root, callbackFn);
  }

  preOrderTraversalNode(node, callbackFn) {
    if (node !== null) {
      callbackFn(node.value);
      this.preOrderTraversalNode(node.left, callbackFn);
      this.preOrderTraversalNode(node.right, callbackFn);
    }
  }

  postOrderTraversal(callbackFn) {
    this.postOrderTraversalNode(this.root, callbackFn);
  }

  postOrderTraversalNode(node, callbackFn) {
    if (node !== null) {
      this.postOrderTraversalNode(node.left, callbackFn);
      this.postOrderTraversalNode(node.right, callbackFn);
      callbackFn(node.value);
    }
  }
}

const binaryTree = new BinaryTree();

binaryTree.insert(8);
binaryTree.insert(3);
binaryTree.insert(10);
binaryTree.insert(1);
binaryTree.insert(6);
binaryTree.insert(14);
binaryTree.insert(4);
binaryTree.insert(7);
binaryTree.insert(13);

console.log("In order traversal");
// 1 3 4 6 7 8 10 13 14
binaryTree.inOrderTraversal((value) => console.log(value));
console.log("---");

console.log("Pre order traversal");
// 8 3 1 6 4 7 10 14 13
binaryTree.preOrderTraversal((value) => console.log(value));
console.log("---");

console.log("Post order traversal");
// 1 4 7 6 3 13 14 10 8
binaryTree.postOrderTraversal((value) => console.log(value));
console.log("---");

binaryTree.delete(6);

console.log("In order traversal after deleting 6");
// 1 3 4 7 8 10 13 14
binaryTree.inOrderTraversal((value) => console.log(value));
console.log("---");
