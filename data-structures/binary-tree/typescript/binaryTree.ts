class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  insert(value: number): void {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node: TreeNode, newNode: TreeNode) {
    if (newNode.value < node.value) {
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

  delete(value: number): void {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(node: TreeNode | null, value: number): TreeNode | null {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
    } else {
      if (node.left === null && node.right === null) {
        node = null;
      } else if (node.left === null) {
        node = node.right;
      } else if (node.right === null) {
        node = node.left;
      } else {
        const minRight = this.findMinNode(node.right);
        node.value = minRight.value;
        node.right = this.deleteNode(node.right, minRight.value);
      }
    }
    return node;
  }

  findMinNode(node: TreeNode): TreeNode {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  inOrderTraversal(callbackFn: (value: number) => void): void {
    this.inOrderTraversalNode(this.root, callbackFn);
  }

  inOrderTraversalNode(
    node: TreeNode | null,
    callbackFn: (value: number) => void
  ): void {
    if (node !== null) {
      this.inOrderTraversalNode(node.left, callbackFn);
      callbackFn(node.value);
      this.inOrderTraversalNode(node.right, callbackFn);
    }
  }

  preOrderTraversal(callbackFn: (value: number) => void): void {
    this.preOrderTraversalNode(this.root, callbackFn);
  }

  preOrderTraversalNode(
    node: TreeNode | null,
    callbackFn: (value: number) => void
  ): void {
    if (node !== null) {
      callbackFn(node.value);
      this.inOrderTraversalNode(node.left, callbackFn);
      this.inOrderTraversalNode(node.right, callbackFn);
    }
  }

  postOrderTraversal(callbackFn: (value: number) => void): void {
    this.postOrderTraversalNode(this.root, callbackFn);
  }

  postOrderTraversalNode(
    node: TreeNode | null,
    callbackFn: (value: number) => void
  ): void {
    if (node !== null) {
      this.inOrderTraversalNode(node.left, callbackFn);
      this.inOrderTraversalNode(node.right, callbackFn);
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
binaryTree.inOrderTraversal((value) => console.log(value));
console.log("---");

console.log("Pre order traversal");
binaryTree.preOrderTraversal((value) => console.log(value));
console.log("---");

console.log("Post order traversal");
binaryTree.postOrderTraversal((value) => console.log(value));
console.log("---");

binaryTree.delete(6);

console.log("In order traversal after deleting 6");
binaryTree.inOrderTraversal((value) => console.log(value));
console.log("---");