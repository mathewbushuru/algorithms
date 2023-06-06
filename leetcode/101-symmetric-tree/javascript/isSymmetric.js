var isSymmetric = function (root) {
  return isMirror(root.left, root.right);
};

function isMirror(tree1, tree2) {
  if (tree1 === null && tree2 === null) {
    // base case - recursively traversed each tree and found no asymmetric case
    return true;
  }

  if (tree1 === null || tree2 === null) {
    // tree cannot be symmetric if node is only on one side
    return false;
  }

  // If these special cases do not apply, tree is symmetric if it fits three conditions

  let result =
    tree1.val === tree2.val && //current level of nodes equal
    isMirror(tree1.left, tree2.right) && // left of subtree1 equal to right of subtree2
    isMirror(tree1.right, tree2.left); // right of subtree1 equal to left of subtree2

  return result;
}
