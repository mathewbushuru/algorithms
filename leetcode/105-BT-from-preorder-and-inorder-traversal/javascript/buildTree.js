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
