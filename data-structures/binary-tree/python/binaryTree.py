class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


class BinaryTree:
    def __init__(self):
        self.root = None

    def insert(self, value):
        if self.root is None:
            self.root = Node(value)
        else:
            self._insert_node(self.root, value)

    def _insert_node(self, node, value):
        if value < node.value:
            if node.left is None:
                node.left = Node(value)
            else:
                self._insert_node(node.left, value)
        else:
            if node.right is None:
                node.right = Node(value)
            else:
                self._insert_node(node.right, value)

    def delete(self, value):
        self.root = self._delete_node(self.root, value)

    def _delete_node(self, node, value):
        if node is None:
            return None

        if value < node.value:
            node.left = self._delete_node(node.left, value)
        elif value > node.value:
            node.right = self._delete_node(node.right, value)
        else:
            if node.left is None and node.right is None:
                node = None
            elif node.left is None:
                node = node.right
            elif node.right is None:
                node = node.left
            else:
                minRight = self._find_min_node(node.right)
                node.value = minRight.value
                node.right = self._delete_node(node.right, minRight.value)

        return node

    def _find_min_node(self, node):
        if node.left is None:
            return node
        else:
            return self._find_min_node(node.left)

    def in_order_traversal(self):
        self._in_order_traversal_node(self.root)

    def _in_order_traversal_node(self, node):
        if node is not None:
            self._in_order_traversal_node(node.left)
            print(f"{node.value} ")
            self._in_order_traversal_node(node.right)

    def pre_order_traversal(self):
        self._pre_order_traversal_node(self.root)

    def _pre_order_traversal_node(self, node):
        if node is not None:
            print(f"{node.value} ")
            self._pre_order_traversal_node(node.left)
            self._pre_order_traversal_node(node.right)

    def post_order_traversal(self):
        self._post_order_traversal_node(self.root)

    def _post_order_traversal_node(self, node):
        if node is not None:
            self._post_order_traversal_node(node.left)
            self._post_order_traversal_node(node.right)
            print(f"{node.value} ")


if __name__ == "__main__":
    bt = BinaryTree()

    elementsList = [8, 3, 10, 1, 6, 14, 4, 7, 13]
    for el in elementsList:
        bt.insert(el)

    print("In order traversal - should be sorted")
    # 1 3 4 6 7 8 10 13 14
    bt.in_order_traversal()

    print("\nPre order traversal")
    # 8 3 1 6 4 7 10 14 13
    bt.pre_order_traversal()

    print("\nPost order traversal")
    # 1 4 7 6 3 13 14 10 8
    bt.post_order_traversal()

    bt.delete(6)
    print("\nIn order traversal after deleting 6")
    # 1 3 4 7 8 10 13 14
    bt.in_order_traversal()
