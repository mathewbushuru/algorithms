// g++ -std=c++17 binaryTree.cpp -o binaryTree && ./binaryTree

/*
* Use std::unique_ptr for automatic memory management to ensure memory for
* nodes is properly deallocated when no longer needed to prevent memory leaks.
*/

#include <iostream>
#include <memory>           // for smart pointers support

class Node {
public:
    int value;
    std::unique_ptr<Node> left;
    std::unique_ptr<Node> right;

    Node(int val) : value(val), left(nullptr), right(nullptr) {}           // constructor that takes an int and uses it to initialize value member of the class. If left or null not initialized here, unique_ptr constructor would have assigned them null anyway.
};

class BinaryTree {
private:
    std::unique_ptr<Node> root;

    void insertNode(std::unique_ptr<Node>& node, int value)
    {
        if (!node)
        {
            node = std::make_unique<Node>(value);           // make_unique creates instance of Node using value and return unique_ptr to that instance
        }
        else
        {
            if (value < node->value)
            {
                insertNode(node->left, value);
            }
            else
            {
                insertNode(node->right, value);
            }
        }
    }

    std::unique_ptr<Node>& deleteNode(std::unique_ptr<Node>& node, int value)
    {
        if (!node)
        {
            return node;
        }

        if (value < node->value)
        {
            // move allows left pointer to take ownership of modified subtree without copying it
            node->left = std::move(deleteNode(node->left, value));
        }
        else if (value > node->value)
        {
            node->right = std::move(deleteNode(node->right, value));
        }
        else
        {
            // delete current node
            if (!node->left)
            {
                return node->right;
            }
            else if (!node->right)
            {
                return node->left;
            }
            else
            {
                // has two children
                // get() function used to access the raw pointer managed by unique_ptr
                Node* minRight = node->right.get();
                while (minRight->left)
                {
                    minRight = minRight->left.get();
                }
                node->value = minRight->value;
                node->right = std::move(
                    deleteNode(node->right, minRight->value)
                );
            }
        }

        return node;
    }

    void inOrderTraversal(const std::unique_ptr<Node>& node)
    {
        if (node)
        {
            inOrderTraversal(node->left);
            std::cout << node->value << " ";
            inOrderTraversal(node->right);
        }
    }

    void preOrderTraversal(const std::unique_ptr<Node>& node)
    {
        if (node)
        {
            std::cout << node->value << " ";
            preOrderTraversal(node->left);
            preOrderTraversal(node->right);
        }
    }

    void postOrderTraversal(const std::unique_ptr<Node>& node)
    {
        if (node)
        {
            postOrderTraversal(node->left);
            postOrderTraversal(node->right);
            std::cout << node->value << " ";
        }
    }

public:
    void insert(int value)
    {
        insertNode(root, value);
    }

    void deleteValue(int value)
    {
        root = std::move(
            deleteNode(root, value)
        );
    }

    void inOrder()
    {
        inOrderTraversal(root);
        std::cout << std::endl;
    }

    void preOrder()
    {
        preOrderTraversal(root);
        std::cout << std::endl;
    }

    void postOrder()
    {
        postOrderTraversal(root);
        std::cout << std::endl;
    }
};

int main()
{
    BinaryTree binaryTree;

    binaryTree.insert(8);
    binaryTree.insert(3);
    binaryTree.insert(10);
    binaryTree.insert(1);
    binaryTree.insert(6);
    binaryTree.insert(14);
    binaryTree.insert(4);
    binaryTree.insert(7);
    binaryTree.insert(13);

    // 1 3 4 6 7 8 10 13 14 
    std::cout << "In order traversal" << std::endl;
    binaryTree.inOrder();
    std::cout << "------" << std::endl;

    // 8 3 1 6 4 7 10 14 13 
    std::cout << "Pre order traversal" << std::endl;
    binaryTree.preOrder();
    std::cout << "------" << std::endl;

    // 1 4 7 6 3 13 14 10 8 
    std::cout << "Post order traversal" << std::endl;
    binaryTree.postOrder();
    std::cout << "------" << std::endl;

    binaryTree.deleteValue(6);

    // 1 3 4 7 8 10 13 14 
    std::cout << "In order traversal after deleting 6" << std::endl;
    binaryTree.inOrder();
    std::cout << "------" << std::endl;

    return 0;
}