**Leetcode 102 (Medium) - [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)**

> Given the `root` of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

> Input: `root = [3,9,20,null,null,15,7]`
> Output: `[[3],[9,20],[15,7]]`

> Input: `root = [1]`
> Output: `[[1]]`

> Input: `root = []`
> Output: `[]`

Algorithm: Use Breadth-First Search (BFS) to traverse the binary tree level by level

Solution

`JavaScript`

```js
var levelOrder = function (root) {
  // special case - empty tree, return empty array
  if (!root) {
    return [];
  }

  // array to store final output;
  const result = [];

  // array to hold nodes that we need to visit, initially with only root
  const queue = [root];

  // iterate as long as there are nodes in queue to be processed
  while (queue.length > 0) {
    // array to hold nodes in current level of tree
    const level = [];

    const length = queue.length;

    for (let i = 0; i < length; i++) {
      // process first element in queue
      let node = queue.shift();
      level.push(node.val);

      // if node has children, add them to end of list so we can look at them later
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    result.push(level);
  }

  return result;
};
```

Time complexity: `O(n)`, each node is processed exactly once.

Space complexity: `O(n)`, in worst case scenario, tree holds all leaf (last-level) nodes. For a complete BT, the last level holds `n/2` nodes and `O(n/2)` = `O(n)`