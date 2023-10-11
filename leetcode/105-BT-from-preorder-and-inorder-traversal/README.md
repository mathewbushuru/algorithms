**Leetcode 105 (Medium) - [ Construct Binary Tree from Preorder and Inorder Traversal
](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)**

> Given two integer arrays `preorder` and `inorder` where `preorder` is the preorder traversal of a binary tree and `inorder` is the inorder traversal of the same tree, construct and return the binary tree.

> Input: `preorder = [3,9,20,15,7]`, `inorder = [9,3,15,20,7]`
> Output: `[3,9,20,null,null,15,7]`

> Input: `preorder = [-1]`, `inorder = [-1]`
> Output: `[-1]`

Solution

`JavaScript`

```js
// provided in problem
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var buildTree = function (preorder, inorder) {
  // we search for root element in inorder arrays several times
  // so we turn it into a map for O(1) search instead of the slower O(n) array search
  // using array.indexOf(rootValue) would be O(n)
  const map = new Map();
  inorder.forEach((value, index) => {
    map.set(value, index);
  });

  // helper function to construct the binary tree
  return buildTreeHelper(
    preorder,
    0,
    preorder.length - 1,
    inorder,
    0,
    inorder.length - 1,
    map
  );
};

function buildTreeHelper(
  preorder,
  preorderStart,
  preorderEnd,
  inorder,
  inorderStart,
  inorderEnd,
  map
) {
  // base case - no more nodes to process in current subtree
  if (preorderStart > preorderEnd) {
    return null;
  }

  const rootValue = preorder[preorderStart];
  const root = new TreeNode(rootValue);

  const inorderRootIndex = map.get(rootValue);
  const leftSubtreeSize = inorderRootIndex - inorderStart;

  // preorder array for left child between [preorderStart+1, preorderStart+leftSubtreeSize]
  // inorder array for left child between [inorderStart, inorderRootIndex-1]
  root.left = buildTreeHelper(
    preorder,
    preorderStart + 1,
    preorderStart + leftSubtreeSize,
    inorder,
    inorderStart,
    inorderRootIndex - 1,
    map
  );

  // preorder array for right child between [preorderStart+leftSubtreeSize+1, preorderEnd]
  // inorder array for right child between [inorderRootIndex+1, inorderEnd]
  root.right = buildTreeHelper(
    preorder,
    preorderStart + leftSubtreeSize + 1,
    preorderEnd,
    inorder,
    inorderRootIndex + 1,
    inorderEnd,
    map
  );

  return root;
}
```

Time complexity: `O(n)` We visit each node in the tree once to construct the binary tree

Space complexity: `O(n)` where n is number of nodes. We store the inorder array in a map for faster search of the root index. If we were to avoid using the map, we would have a worse time complexity but the space complexity would improve to `O(log(n))` which would account for the recursion stack