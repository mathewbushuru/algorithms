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
        elif node > node.value:
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
        self._post_order_traversal_node(node.left)
        self._post_order_traversal_node(node.right)
        print(f"{node.value} ")
