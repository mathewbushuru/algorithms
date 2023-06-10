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
      if (node.right){
        queue.push(node.right);
      }
    }

    result.push(level);
  }

  return result;
};
