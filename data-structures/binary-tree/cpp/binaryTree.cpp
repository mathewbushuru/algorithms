// g++ -std=c++17 binaryTree.cpp -o binaryTree && ./binaryTree

#include <iostream>
#include <memory>

class Node {
public:
    int value;
    std::unique_ptr<Node> left;
    std::unique_ptr<Node> right;

    Node(int value) : value(value) {}
};

class BinaryTree {
private:
    std::unique_ptr<Node> root;

    void insertNode(std::unique_ptr<Node>& node, int value)
    {
        if (!node)
        {
            node = std::make_unique<Node>(value);
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
            node->left = std::move(deleteNode(node->left, value));
        }
        else if (value > node->value)
        {
            node->right = std::move(deleteNode(node->right, value));
        }
        else
        {
            // delete current node
        }

        //placeholder return
        return node;
    }
};

int main()
{
    return 0;
}