**Leetcode 112 (Easy) - [Path Sum](https://leetcode.com/problems/path-sum/)**

> Given the `root` of a binary tree and an integer `targetSum`, return `true` if the tree has a root-to-leaf path such that adding up all the values along the path equals `targetSum`.

> A leaf is a node with no children.

> Input: `root = [5,4,8,11,null,13,4,7,2,null,null,null,1]`, `targetSum = 22`
> Output: `true`
> Explanation: `The root-to-leaf path with the target sum is 5->4->11->2.`

> Input: `root = [1,2,3]`, `targetSum = 5`
> Output: `false`
> Explanation: There two root-to-leaf paths in the tree:
> (1 --> 2): The sum is 3.
> (1 --> 3): The sum is 4.
> There is no root-to-leaf path with sum = 5.

> Input: `root = []`, `targetSum = 0`
> Output: `false`
> Explanation: `Since the tree is empty, there are no root-to-leaf paths.`

Algorithm: Use a recursive approach. Traverse the tree in a depth-first manner, examining each node along the way. At each node, subtract the node's value from the target sum. Continue recursively checking left and right children until we reach a leaf node. If the leaf node's value is equal to the remaining sum, return true. Otherwise (or if we reach null), return false as we have reach the end of the tree without finding the target sum.

Solution

`JavaScript`

```js
// root - current node being checked recursively
// targetSum - resulting sum after recursively subtracting upper node values
var hasPathSum = function (root, targetSum) {
  // base case
  if (root === null) {
    return false;
  }

  // check if current node is leaf node
  if (root.left === null && root.right === null) {
    return root.val === targetSum;
  }

  // internal nodes
  // reduce sum, and recursively check left and right children
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};
```

Time complexity: `O(n)` - In the worst case, we might have to visit all the nodes in the tree

Space complexity: `O(h)` where h is the height of the tree. In worst case tree height can be equal to number of nodes in tree, `O(n)` (Completely unbalanced trees)