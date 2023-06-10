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
