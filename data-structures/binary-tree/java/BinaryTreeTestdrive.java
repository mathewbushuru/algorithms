class Node {
    int value;
    Node left;
    Node right;

    public Node(int value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    Node root; 

    public BinaryTree(){
        this.root = null; 
    }

    public void insert(int value){
        Node newNode  = new Node(value);

        if (root == null){
            root = newNode;
        }else {
            insertNode(root, newNode);
        }
    }

    private void insertNode(Node node, Node newNode){
        if (newNode.value < node.value){
            if (node.left == null) {
                node.left = newNode;
            } else {
                insertNode(node.left,newNode);
            }
        } else {
            if (node.right == null){
                node.right = newNode;
            } else {
                insertNode(node.right,newNode);
            }
        }
    }

    public void delete(int value){
        root = deleteNode(root,value);
    }

    private Node deleteNode(Node node, int value){
        if (node == null){
            return null;
        }

        if (value < node.value){
            node.left = deleteNode(node.left,value);
        } else if (value > node.value){
            node.right = deleteNode(node.right, value);
        } else {
            if (node.left == null && node.right  == null){
                node = null;
            } else if (node.left == null){
                node = node.right;
            } else if (node.right == null){
                node = node.left;
            } else {
                Node minRight = findMinNode(node.right);
                node.value = minRight.value;
                node.right = deleteNode(node.right, minRight.value);
            }
        }
        return node;
    }

    private Node findMinNode(Node node){
        if (node.left == null){
            return node;
        } else {
            return findMinNode(node.left);
        }
    }

    public void inOrderTraversal(){
        inOrderTraversalNode(root);
    }

    private void inOrderTraversalNode(Node node){
        if (node != null){
            inOrderTraversalNode(node.left);
            System.out.println(node.value);
            inOrderTraversalNode(node.right);
        }
    }

    public void preOrderTraversal(){
        preOrderTraversalNode(root);
    }

    private void preOrderTraversalNode(Node node){
        if (node != null){
            System.out.println(node.value);
            preOrderTraversalNode(node.left);
            preOrderTraversalNode(node.right);
        }
    }

    public void postOrderTraversal(){
        postOrderTraversalNode(root);
    }

    private void postOrderTraversalNode(Node node){
        if (node != null){
            postOrderTraversalNode(node.left);
            postOrderTraversalNode(node.right);
            System.out.println(node.value);
        }
    }
} 

public class BinaryTreeTestdrive{
    public static void main(String[] args){
        BinaryTree binaryTree = new BinaryTree();

        binaryTree.insert(8);
        binaryTree.insert(3);
        binaryTree.insert(10);
        binaryTree.insert(1);
        binaryTree.insert(6);
        binaryTree.insert(14);
        binaryTree.insert(4);
        binaryTree.insert(7);
        binaryTree.insert(13);

        System.out.println("In order traversal");
        binaryTree.inOrderTraversal();
        System.out.println("---");

        System.out.println("Pre order traversal");
        binaryTree.preOrderTraversal();
        System.out.println("---");

        System.out.println("Post order traversal");
        binaryTree.postOrderTraversal();
        System.out.println("---");
    }
}