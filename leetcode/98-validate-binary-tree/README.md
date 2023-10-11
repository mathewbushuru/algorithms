**Leetcode 98 (Medium) - [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)**

> Given the `root` of a binary tree, determine if it is a valid binary search tree (BST).

> A valid BST is defined as follows:

> - The left subtree of a node contains only nodes with keys less than the node's key.
> - The right subtree of a node contains only nodes with keys greater than the node's key.
> - Both the left and right subtrees must also be binary search trees.

> Input: `root = [2,1,3]`
> Output: `true`

> Input: `root = [5,1,4,null,null,3,6]`
> Output: `false`
> Explanation: `The root node's value is 5 but its right child's value is 4.`

Solution

`JavaScript`

```js
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var isValidBST = function (root) {
  //define helper function that takes in additional min and max constraints
  return isValidBSTHelper(root, null, null);
};

function isValidBSTHelper(root, minConstraint, maxConstraint) {
  // reached end of path without violating BST rules
  if (!root) {
    return true;
  }

  // BST  violation
  if (minConstraint !== null && root.val <= minConstraint) {
    return false;
  }

  // BST violation
  if (maxConstraint !== null && root.val >= maxConstraint) {
    return false;
  }

  // update max constraint of left child to be current node
  // update min constraint of right child to be current node
  return (
    isValidBSTHelper(root.left, minConstraint, root.val) &&
    isValidBSTHelper(root.right, root.val, maxConstraint)
  );
}
```

Time complexity: `O(n)`, in the worst case, we need to visit each node in the tree to confirm if the tree is a valid BST

Space complexity: `O(log(n))` average case, `O(n)` worst case.