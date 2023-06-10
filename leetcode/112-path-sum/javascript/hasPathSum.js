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
