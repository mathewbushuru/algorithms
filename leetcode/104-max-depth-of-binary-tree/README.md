**Leetcode 104 (Easy) - [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)**

> Given the `root` of a binary tree, return its maximum depth.

> A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

> Input: `root = [3,9,20,null,null,15,7]`
> Output: `3`

> Input: `root = [1,null,2]`
> Output: `2`

Solution

`JavaScript`

```js
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var maxDepth = function (root) {
  if (root === null) {
    return 0;
  } else {
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
  }
};
```

Time complexity: `O(n)` where n is total number of nodes. We visit every node once due having recursive calls to both the left and right subtrees.

Space complexity: `O(h)` where h is the height of the tree. The maximum depth of the recursive call is the height of the tree.